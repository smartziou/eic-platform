/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LanguageTypeForm } from "./language-type-form.component";
import { SizeInfoFormControl } from "./size-info-form.component";

@Component({
    selector: 'language-info-form',
    templateUrl : 'app/pages/resourceregistration/shared/templates/language-info-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})

export class LanguageInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    public myForm: FormGroup;

    ngOnInit() {
        // this.myForm = CorpusTextPartInfoFormControl.generate(this._fb);
        //
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
        this.myForm = this.parentForm;
        // this.myForm = CorpusTextPartInfoFormControl.generate(this._fb);
        // this.parentForm.addControl("corpusTextPartInfo", this.myForm);
    }

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {}

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            language: LanguageTypeForm.addNew(_fb)
            // sizePerLanguage: SizeInfoFormControl.generate(_fb)
            // sizes : _fb.array([SizeInfoFormControl.generate(_fb)]),
        });
    }

    addNew(type: string) {
        // if(type=='languageVarieties') {
        //     const control = <FormArray>this.myForm.controls['sizes'];
        //     control.push(SizeInfoFormControl.generate(this._fb));
        // }
    }

    $delete(type: string, index: number) {
        // if(type=='languageVarieties') {
        //     const control = <FormArray>this.myForm.controls['sizes'];
        //     control.removeAt(index);
        // }
    }
}