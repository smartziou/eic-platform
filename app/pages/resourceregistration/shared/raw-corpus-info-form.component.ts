/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MyStringFormControl } from "./my-string-form.component";
import { EnumValues, resourceIdentifierSchemeNameEnum } from "./omtd.enum";
import { IdentifierFormControl } from "./identifier-common-form.component";
import { Description, resourceNameDesc, descriptionDesc, resourceShortNameDesc } from "./omtd.description";
import {CorpusTextPartInfoFormControl} from "./corpus-text-part-info-form.component";

@Component({
    selector: 'raw-corpus-info-form',
    templateUrl : './templates/raw-corpus-info-form.component.html',
    styleUrls : ['./templates/common.css']
})

export class RawCorpusInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    public myForm: FormGroup;
    
    public customClass: string = 'customAccordionPanel';

    ngOnInit() {
        this.myForm = RawCorpusInfoFormControl.generate(this._fb);
        //this.myForm.addControl("corpusSubtype","rawCorpus");
        // var self = this;
        // this.myForm.patchValue = (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
        //     Object.keys(value).forEach(name => {
        //         const control = <FormArray>this.myForm.controls[name];
        //         for(var i = control.length;i < value[name].length; i++) {
        //             self.addNew(name);
        //         }
        //     });
        //     Object.keys(value).forEach(name => {
        //         if (self.myForm.controls[name]) {
        //             self.myForm.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
        //         }
        //     });
        //     self.myForm.updateValueAndValidity({onlySelf, emitEvent});
        // };

        this.parentForm.addControl("rawCorpusInfo", this.myForm);
    }

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {
    }

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            corpusMediaPartsType: _fb.group({
                corpusTextParts : _fb.array([CorpusTextPartInfoFormControl.generate(_fb)]),
            }),
            corpusSubtype : "rawCorpus"
        });
    }

    addNew(type: string) {
        if(type=='resourceNames') {
            const control = <FormArray>this.myForm.controls['resourceNames'];
            control.push(MyStringFormControl.generate(this._fb));
        }
    }

    $delete(type: string, index: number) {
        if(type=='resourceNames') {
            const control = <FormArray>this.myForm.controls['resourceNames'];
            control.removeAt(index);
        }
    }
}