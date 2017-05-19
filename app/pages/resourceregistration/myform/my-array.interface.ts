/**
 * Created by stefanos on 15/5/2017.
 */
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {
    Component, Input, OnInit, Type, ComponentFactoryResolver,
    AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory
} from "@angular/core";
import {MyFormDirective} from "./my-form.directive";
import {MyGroup} from "./my-group.interface";
import {MyWrapper} from "./my-wrapper.interface";


@Component({
    selector : 'form-repeat',
    template : `

<div [formGroup]="group">
    <div formArrayName="{{name}}">
    <template my-form>
    </template>
    </div>
</div>
<button class="uk-button uk-button-large uk-button-blue registerButton" (click)="push()">Add One</button>
`

})
export class MyArray extends MyGroup implements OnInit, AfterViewInit{

    num = 1;

    @Input() public group: FormGroup;

    @Input() public name : string;

    @Input() public required : boolean = false;

    @Input() public label : string = 'Default Label';

    @Input() public description : string = 'No description';

    protected groupDefinition : { [key:string]:any };

    private push() {
        this.createView(this.num++);
    }

    constructor(private _cfr: ComponentFactoryResolver,private _fb: FormBuilder) {
    }

    private generate() : FormGroup {
        let required = (this.required) ? ['', Validators.required] : '' ;
        let ret = {};
        Object.keys(this.groupDefinition).forEach(entry => {
            ret[entry] = required;
        });
        return this._fb.group(ret);
    }

    private createView(i : number) : void {
        let componentWrapperFactory = this._cfr.resolveComponentFactory(this.wrapperComponent);
        let componentFactory = this._cfr.resolveComponentFactory(this.component);

        let viewWrapperRef : componentWrapperFactory

        let viewContainerRef : ViewContainerRef = this.formComponents.viewContainerRef;
        let componentView = componentFactory.create(viewContainerRef.injector);

        (<MyGroup>componentView.instance).group = <FormArray>this.group.controls[this.name];
        (<MyGroup>componentView.instance).index = viewContainerRef.length;
        (<MyGroup>componentView.instance).required = this.required;

        let arrayGroup = (<MyGroup>componentView.instance).generate();
        (<FormArray>this.group.controls[this.name]).push(arrayGroup);

        viewContainerRef.insert(componentView.hostView);
    }

    ngOnInit(): void {
        this.group.addControl(this.name, this._fb.array([]));
    }

    ngAfterViewInit(): void {
        let viewContainerRef = this.formComponents.viewContainerRef;
        viewContainerRef.clear();
        this.createView(0);

    }

}


@Component({
    selector : 'form-repeat-wrapper',
    template : `

    <div class="group">
        <div class="form-group">
            <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                <div class="group-label">
                    <span>{{name}}</span>
                    <a class="remove-element" (click)="$delete(i)">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <template></template>
    </div>
`

})
export class MyArrayWrapper extends MyWrapper {

    insert(i: number) {
    }

    @Input() name : string = 'Default Name';

    private $delete(i : number){};
}