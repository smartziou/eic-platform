/**
 * Created by stefanos on 5/12/2016.
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Description, metadataIdentifierTypeDesc} from "./omtd.description";
import {EnumValues} from "./omtd.enum";

@Component({
    selector: 'identifier-common',
    templateUrl : 'app/pages/resourceregistration/shared/templates/identifier-common-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class IdentifierFormControl implements OnInit{

    revisionDesc : Description;

    @Input('group')
    public parentForm: FormGroup;

    @Input('control-name')
    name : string;

    private schemeName : string;

    @Input('scheme-desc')
    public schemeUriDesc : Description;

    @Input('scheme-values')
    public schemeUriValues : EnumValues;

    @Input('label')
    label : string;

    @Input('index')
    index: number;

    private identifierDesc : Description;

    private identifierSchemeDesc : Description;

    public myForm : FormGroup;


    public static generate(schemeName : string) {
        var temporary = {
            value : ['', [Validators.required]],
            schemeUri : ''
        }
        temporary[schemeName + "SchemeName"] = ['', Validators.required];
        return temporary;
    }

    constructor(private _fb: FormBuilder) {

        this.identifierDesc = metadataIdentifierTypeDesc;
        this.schemeName = this.name + "SchemeName";
        this.identifierDesc.label = "Identifier";
        this.schemeUriDesc = {desc: "Any URI", label: "URI"};
        // if(typeof this.schemeUriDesc == 'undefined') {
        //     this.schemeUriDesc = {desc: "Any URI", label: "URI"};
        // }
        this.identifierSchemeDesc = {desc : "Enum" , label : "One of the options"};
    }

    ngOnInit() {
        this.myForm = this._fb.group(IdentifierFormControl.generate(this.name));
        this.parentForm.addControl(this.name,this.myForm);
    }
}