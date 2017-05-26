import {FormGroup, FormBuilder, FormArray, AbstractControl} from "@angular/forms";
import {Component, Input, OnInit, Injector, OnChanges, SimpleChanges} from "@angular/core";
import {Description} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 15/5/2017.
 */

@Component({
})
export class MyGroup implements OnInit {

    @Input() public group: FormGroup | FormArray;

    @Input() public name : string | number;

    @Input() public required : boolean = false;

    @Input() public description : Description = null;

    @Input() public index : number = -1;

    protected _fb : FormBuilder;

    protected groupDefinition : { [key:string]:any };

    constructor(injector : Injector) {
        this._fb = injector.get(FormBuilder);
    }

    public generate() : FormGroup {

        let ret = this._fb.group(this.groupDefinition);

        if (!this.required)
            Object.keys(ret.controls).forEach(item => ret.controls[item].clearValidators());
        // else
            // Object.keys(ret.controls).forEach(item => ret.controls[item].setValue('required'));
        return ret;
    }

    public getMyControl(name : string) : AbstractControl {
        return this.group.get([this.name,name].join('.'));
    }

    ngOnInit(): void {
        if(this.index == -1) {
            if(<string>this.name == '' || (<FormGroup>this.group).contains(<string>this.name)) {
                let obj = this.generate();
                Object.keys(obj.controls).forEach(c => (<FormGroup>this.group.get(<string>this.name)).addControl(c,obj.controls[c]));
            } else {
                (<FormGroup>this.group).addControl(<string>this.name, this.generate());
            }
        } else {
            this.name = this.index;
        }
    }

}

@Component({
    selector : 'form-inline',
    template : `
<template #descTemplate>{{description.desc}}</template>

<div class="form-group">
    <label class="col-sm-2 col-md-2 control-label">
        {{description.label}}
        <span *ngIf="params==='tooltip'"><i class="fa fa-info-circle" [tooltip]="descTemplate" container="body"></i></span>
    </label>
    <div class="form-group">
        <div class="col-md-{{width}} col-sm-{{width}}" [ngClass]="{'has-error': !valid}">
            <ng-content></ng-content>
        </div>
    </div>
</div>
<div *ngIf="params==='inline'" class="form-group">
    <div class="col-sm-offset-2 col-md-offset-2 col-sm-{{width}} col-md-{{width}}">
        <small>{{description.desc}}</small>
    </div>
</div>

`,
    styleUrls : ['../shared/templates/common.css']

})
export class InlineFormWrapper implements OnChanges {

    @Input() public description : Description = null;

    @Input() public params : string = 'inline';

    @Input() public width : number = 8;

    @Input() public valid : boolean = true;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.valid)
            this.valid = <boolean>changes.valid.currentValue;
    }

}