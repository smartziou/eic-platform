/**
 * Created by stefanos on 15/5/2017.
 */
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {
    Component, Input, OnInit, Type, ComponentFactoryResolver,
    AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory, Injector, TemplateRef
} from "@angular/core";
import {MyFormDirective} from "./my-form.directive";
import {MyGroup} from "./my-group.interface";
import {MyWrapper} from "./my-wrapper.interface";
import {Description} from "../../../domain/omtd.description";


@Component({
    selector : 'form-repeat',
    template : `

<div [formGroup]="group">
    <div formArrayName="{{name}}">
        <ng-template *my-form></ng-template>
    </div>
</div>
<div class="form-group">
    <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
        <a class="add-new-element add-new-group" (click)="push()"><i class="fa fa-plus" aria-hidden="true"></i>
            Add New {{description.label}}</a>
    </div>
</div>
`,
    styleUrls : ['../shared/templates/common.css']

})
export class MyArray extends MyGroup implements OnInit, AfterViewInit{

    @Input() public component : Type<MyGroup>;

    @Input() public wrapper : Type<MyWrapper> = MyArrayWrapper;

    @ViewChild(MyFormDirective) protected formComponents: MyFormDirective;

    protected _cfr : ComponentFactoryResolver;

    protected viewContainerRef : ViewContainerRef;

    protected push() {
        this.createView();
    }

    constructor(injector : Injector) {
        super(injector);
        this._cfr = injector.get(ComponentFactoryResolver);
    }

    protected createView() : void {
        let componentFactory = this._cfr.resolveComponentFactory(this.component);
        let wrapperFactory = this._cfr.resolveComponentFactory(this.wrapper);
        let wrapperView = wrapperFactory.create(this.viewContainerRef.injector);
        let componentView = componentFactory.create(this.viewContainerRef.injector);

        (<MyGroup>componentView.instance).index = this.viewContainerRef.length;
        (<MyGroup>componentView.instance).required = this.required;
        (<MyGroup>componentView.instance).description = this.description;
        let arrayGroup = (<MyGroup>componentView.instance).generate();
        (<MyGroup>componentView.instance).group = <FormArray>this.group.controls[this.name];

        (<MyWrapper>wrapperView.instance).component = componentView.hostView;
        (<MyWrapper>wrapperView.instance).viewRef = wrapperView.hostView;
        (<MyWrapper>wrapperView.instance).description = this.description;
        (<MyWrapper>wrapperView.instance).deleteNotifier.subscribe($event => {
            let index = this.viewContainerRef.indexOf($event);
            this.remove(index);
            <FormArray>this.group.controls[this.name].removeAt(index);
        });

        (<FormArray>this.group.controls[this.name]).push(arrayGroup);

        this.viewContainerRef.insert(wrapperView.hostView);
    }

    remove(i : number) : void {
        this.viewContainerRef.remove(i);
    }

    ngOnInit(): void {
        this.viewContainerRef = this.formComponents.viewContainerRef;
        (<FormGroup>this.group).addControl(<string>this.name, this._fb.array([]));
        this.group.patchValue = this.patchValue();
    }

    ngAfterViewInit(): void {
        let viewContainerRef = this.formComponents.viewContainerRef;
        viewContainerRef.clear();
        this.createView();

    }

    protected patchValue() {
        let self = this;
        console.log(this);
        return (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) => {
            for (let i = (<FormArray>this.group.controls[this.name]).length; i < Object.keys(value).length; i++) {
                self.createView();
            }
            Object.keys(value).forEach(name => {
                if (self.group.controls[name]) {
                    self.group.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.group.updateValueAndValidity({onlySelf, emitEvent});
        };
    }
}

@Component({
    selector : 'form-repeat-inline',
    template : `
    <form-inline [description]="description">
        <ng-template *my-form></ng-template>
    </form-inline>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element" (click)="add(getMyControl('surnames'),myString)">
                <i class="fa fa-plus" aria-hidden="true"></i> Add {{description.label}}
            </a>
        </div>
    </div>
    `,
    styleUrls : ['../shared/templates/common.css']

})
export class MyArrayInline extends MyArray {
    @Input()
    public wrapper : Type<MyWrapper> = MyInlineArrayWrapper;

    @Input()
    public description : Description;
}


@Component({
    selector : 'form-repeat-wrapper',
    template : `

    <div class="group">
        <div class="form-group">
            <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                <div class="group-label">
                    <span>{{description.label}}</span>
                    <a class="remove-element" (click)="remove()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="form-group">
            <ng-template my-form></ng-template>
        </div>
    </div>
`,
    styleUrls : ['../shared/templates/common.css']

})
export class MyArrayWrapper extends MyWrapper{

    public index : number = 0;

    ngOnInit() {
        super.ngOnInit();
    }
}

@Component({
    selector : 'form-inline-repeat-wrapper',
    template : `        
    <ng-template my-form></ng-template>
    <a class="remove-element col-sm-1 col-md-1" (click)="remove()"><i
            class="fa fa-times" aria-hidden="true"></i></a>
`,
    styleUrls : ['../shared/templates/common.css']

})
export class MyInlineArrayWrapper extends MyWrapper {

    public index : number = 0;

    ngOnInit() {
        super.ngOnInit();
    }
}

