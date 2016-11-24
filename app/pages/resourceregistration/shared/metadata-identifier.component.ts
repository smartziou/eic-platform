///<reference path="../../../../node_modules/@angular/forms/src/directives/control_value_accessor.d.ts"/>
/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Description, metadataIdentifierTypeDesc} from "./omtd.description";
import {EnumValues, ValuesPipe, metadataIdentifierSchemeNameEnum, languageIdTypeEnum} from "./omtd.enum"

@Component({
    selector: 'metadata-identifier-form',
    templateUrl : 'app/pages/resourceregistration/shared/templates/metadata-identifier.component.html'
})


export class MetadataIdentifierFormControl implements OnInit{

    metadataIdentifierDesc : Description;
    schemeUriDesc : Description;
    metadataIdentifierSchemeDesc : Description;
    metadaIdentifierValues : EnumValues;

    @Input('group')
    public _metadataIdentifier: FormGroup;

    public get formGroup() {
        return this._metadataIdentifier;
    }

    public set formGroup(val : FormGroup) {
        this._metadataIdentifier = val;
    }

    constructor(private _fb: FormBuilder) {
        this.metadataIdentifierDesc = metadataIdentifierTypeDesc;
        this.metadataIdentifierDesc.label = "Identifier"
        this.schemeUriDesc = {desc : "Any URI", label : "URI"};
        this.metadataIdentifierSchemeDesc = {desc : "Enum" , label : "One of the options"}
        this.metadaIdentifierValues = languageIdTypeEnum;
    }

    ngOnInit() {
        this._metadataIdentifier = this._fb.group({
            value : ['', [Validators.required]],
            schemeUri : '',
            metadataIdentifierSchemeName : ['', Validators.required]
        });
    }
}