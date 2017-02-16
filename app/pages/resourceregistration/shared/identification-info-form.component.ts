/**
 * Created by stefania on 1/17/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {MyStringFormControl} from "./my-string-form.component";
import {EnumValues, resourceIdentifierSchemeNameEnum} from "./omtd.enum";
import {IdentifierFormControl} from "./identifier-common-form.component";
import {Description, resourceNameDesc, descriptionDesc, resourceShortNameDesc} from "./omtd.description";

@Component({
    selector: 'identification-info-form',
    templateUrl : './templates/identification-info-form.component.html',
    styleUrls : ['./templates/common.css']
})

export class IdentificationInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    private name : string;

    public myForm: FormGroup;
    
    private resourceIdentifierEnum: EnumValues[];
    private resourceNameDescription: Description = resourceNameDesc;
    private descriptionDescription: Description = descriptionDesc;
    private resourceShortNameDescription: Description = resourceShortNameDesc;

    public customClass: string = 'customAccordionPanel';

    ngOnInit() {
        this.myForm = IdentificationInfoFormControl.generate(this._fb);

        var self = this;
        this.myForm.patchValue = (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
            Object.keys(value).forEach(name => {
                const control = <FormArray>this.myForm.controls[name];
                for(var i = control.length;i < value[name].length; i++) {
                    self.addNew(name);
                }
            });
            Object.keys(value).forEach(name => {
                if (self.myForm.controls[name]) {
                    self.myForm.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.myForm.updateValueAndValidity({onlySelf, emitEvent});
        };

        this.parentForm.addControl("identificationInfo", this.myForm);
    }

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {
        this.resourceIdentifierEnum = resourceIdentifierSchemeNameEnum;
    }

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            resourceNames : _fb.array([MyStringFormControl.generate(_fb,true)]),
            descriptions : _fb.array([MyStringFormControl.generate(_fb,true)]),
            resourceShortNames : _fb.array([MyStringFormControl.generate(_fb,false)]),
            identifiers: _fb.array([_fb.group(IdentifierFormControl.generate('resourceIdentifierSchemeName',true))])
        });
    }

    addNew(type: string) {
        if(type=='resourceNames') {
            const control = <FormArray>this.myForm.controls['resourceNames'];
            control.push(MyStringFormControl.generate(this._fb,true));
        } else if(type=='descriptions') {
            const control = <FormArray>this.myForm.controls['descriptions'];
            control.push(MyStringFormControl.generate(this._fb,true));
        } else if(type=='resourceShortNames') {
            const control = <FormArray>this.myForm.controls['resourceShortNames'];
            control.push(MyStringFormControl.generate(this._fb,false));
        } else if(type=='identifiers') {
            const control = <FormArray>this.myForm.controls['identifiers'];
            control.push(this._fb.group(IdentifierFormControl.generate('resourceIdentifierSchemeName',true)));
        }
    }

    $delete(type: string, index: number) {
        if(type=='resourceNames') {
            const control = <FormArray>this.myForm.controls['resourceNames'];
            control.removeAt(index);
        } else if(type=='descriptions') {
            const control = <FormArray>this.myForm.controls['descriptions'];
            control.removeAt(index);
        } else if(type=='resourceShortNames') {
            const control = <FormArray>this.myForm.controls['resourceShortNames'];
            control.removeAt(index);
        } else if(type=='identifiers') {
            const control = <FormArray>this.myForm.controls['identifiers'];
            control.removeAt(index);
        }
    }
}