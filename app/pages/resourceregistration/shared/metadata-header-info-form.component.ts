/**
 * Created by stefanos on 21/11/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Description, revisionDesc} from "./omtd.description";
import {MetadataIdentifierFormControl} from "./metadata-identifier.component";

@Component({
    selector: 'metadata-header-info-form',
    templateUrl : 'app/pages/resourceregistration/shared/templates/metadata-identifier-form.component.html'
})


export class MetadataHeaderInfoFormControl implements OnInit{

    revisionDesc : Description;

    @Input('group')
    public metadataHeaderInfoForm: FormGroup;

    metadataIdentifier : MetadataIdentifierFormControl;


    public get formGroup() {
        return this.metadataHeaderInfoForm;
    }

    constructor(private _fb: FormBuilder) {
        this.revisionDesc = revisionDesc;
        this.metadataIdentifier = new MetadataIdentifierFormControl(_fb);
    }

    ngOnInit() {
        this.metadataHeaderInfoForm = this._fb.group({
            metadataIdentifier : this.metadataIdentifier.formGroup,
            revision : ['', [Validators.required]]
        });
    }
}