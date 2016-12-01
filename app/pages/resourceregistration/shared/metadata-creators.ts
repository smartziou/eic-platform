import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Description, metadataIdentifierTypeDesc} from "./omtd.description";
import {EnumValues, metadataIdentifierSchemeNameEnum} from "./omtd.enum"

@Component({
    selector: 'metadata-creators',
    template : `


`
})


export class MetadataCreatorsForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    public myForm : FormGroup;


    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {

    }
}