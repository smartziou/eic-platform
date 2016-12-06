/**
 * Created by stefanos on 21/11/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Description, revisionDesc} from "./omtd.description";

@Component({
    selector: 'metadata-header-info-form',
    templateUrl : 'app/pages/resourceregistration/shared/templates/metadata-header-info-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})


export class MetadataHeaderInfoFormControl implements OnInit{

    revisionDesc : Description;

    @Input('group')
    public parentForm: FormGroup;

    public myForm : FormGroup;



    public get formGroup() {
        return this.myForm;
    }

    constructor(private _fb: FormBuilder) {
        this.revisionDesc =  revisionDesc;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            revision : ['', [Validators.required]]
        });
        this.parentForm.addControl("metadataHeaderInfo", this.myForm);
    }
}