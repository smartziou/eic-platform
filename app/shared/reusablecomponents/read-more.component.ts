/**
 * Created by stefania on 4/6/17.
 */
import {
    Component, Input, AfterContentInit, ElementRef, ViewChild, OnChanges, SimpleChanges,
    AfterViewInit
} from '@angular/core';

@Component({
    selector: 'read-more',
    template: `
        <div [class.collapsed]="isCollapsed" [style.height]="isCollapsed ? maxHeight+'px' : 'auto'" #readMoreDiv>
            <ng-content></ng-content>
        </div>     
        <a *ngIf="isCollapsable" (click)="isCollapsed =! isCollapsed">View {{isCollapsed? 'more':'less'}}...</a>
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
        }
    `]
})
export class ReadMoreComponent implements AfterContentInit {

    //the text that need to be put in the container
    //@Input() text: string;

    //maximum height of the container
    @Input('maxHeight') maxHeight: number = 100;

    @ViewChild('readMoreDiv')
    readMoreDiv : ElementRef;
    //set these to false to get the height of the expended container
    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    ngAfterContentInit() {
        setTimeout(_ => {
            let currentHeight = this.readMoreDiv.nativeElement.offsetHeight;
            console.log(this.readMoreDiv.nativeElement);
            console.log('current height for ' + this.readMoreDiv.nativeElement.toString(),  currentHeight);

            //collapsable only if the contents make container exceed the max height
            if (currentHeight > this.maxHeight) {
                this.isCollapsed = true;
                this.isCollapsable = true;
            } else {

            }
        },200);
    }
}

@Component({
    selector: 'read-more-text',
    template: `
        <div [class.collapsed]="isCollapsed" [style.height]="isCollapsed ? maxHeight+'px' : 'auto'" #readMoreDiv>
            {{text}}
        </div>     
        <a *ngIf="isCollapsable" (click)="isCollapsed =! isCollapsed">View {{isCollapsed? 'more':'less'}}...</a>
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
        }
    `]
})
export class ReadMoreTextComponent extends ReadMoreComponent implements OnChanges, AfterViewInit {
    ngAfterViewInit(): void {
        this.ngAfterContentInit();
    }

    ngOnChanges(): void {
        this.ngAfterContentInit();
    }


    @Input()
    text : string = "";
}

