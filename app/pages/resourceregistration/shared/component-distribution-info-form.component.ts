/**
 * Created by stefania on 1/22/17.
 */
import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {EnumValues, distributionMediumEnum, componentDistributionFormEnum} from "../../../domain/omtd.enum";

@Component({
    selector: 'component-distributions-info-form-common',
    template : `
<accordion-group #group [panelClass]="customClass"
                 [isOpen]="true" [panelClass]="parentForm.valid ? 'panel-success' : 'panel-danger'">
    <div accordion-heading>
        <span>Distribution Info
            <i class="fa" [ngClass]="{'fa-angle-down': !group?._isOpen, 'fa-angle-up': group?._isOpen}" aria-hidden="true"></i>
        </span>
    </div>
                 
    <div [formGroup]="myForm">
        <div *ngFor="let c of myForm.controls; let i=index" class="group" formGroupName="{{i}}">
            <div class="form-group">
                <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                    <div class="group-label">
                        <span>Distribution Info</span>
                        <a class="remove-element" (click)="$delete(i)">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <component-distribution-info-form-common [group]="c"></component-distribution-info-form-common>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element add-new-group" (click)="$add()"><i class="fa fa-plus" aria-hidden="true"></i>
                    Add New Distribution</a>
            </div>
        </div>
    </div>

</accordion-group>
`,
    styleUrls : ['./templates/common.css']
})
export class ComponentDistributionsInfoFormControl implements OnInit{
    @Input('group')
    parentForm : FormGroup;

    myForm : FormArray;

    public customClass: string = 'customAccordionPanel';

    constructor(private _fb : FormBuilder) {
    }

    $add() {
        this.myForm.push(ComponentDistributionInfoFormControl.generate(this._fb));
    }

    $delete(i : number) {
        this.myForm.removeAt(i);
    }

    ngOnInit(): void {
        this.myForm = this._fb.array([ComponentDistributionInfoFormControl.generate(this._fb)]);
        this.parentForm.addControl("componentDistributionInfos",this.myForm);
    }

}


@Component({
    selector: 'component-distribution-info-form-common',
    templateUrl : './templates/component-distribution-info-form.component.html',
    styleUrls : ['./templates/common.css']
})
export class ComponentDistributionInfoFormControl implements OnInit{
    @Input('group')
    parentForm : FormGroup;

    componentDistributionEnum : EnumValues[];

    constructor(private _fb : FormBuilder) {
        this.componentDistributionEnum = componentDistributionFormEnum;
    }

    static generate(_fb : FormBuilder) {
        return _fb.group({
            componentDistributionMedium : ''
        });
    }

    ngOnInit(): void {
    }

}
