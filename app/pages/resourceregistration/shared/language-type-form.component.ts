/**
 * Created by stefanos on 6/12/2016.
 */
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl} from '@angular/forms';
import {Description, languageIdDesc, scriptIdDesc, variantIdDesc,regiontIdDesc,languageTagDesc} from "./omtd.description";
import {
    EnumValues, personIdentifierSchemeNameEnum, scriptIdTypeEnum, regionIdTypeEnum,
    variantIdTypeEnum
} from "./omtd.enum";



@Component({
    selector: 'languages-types',
    template : `
    
<div [formGroup]="parentForm">
    <div *ngFor="let c of parentForm.controls[name].controls; let i=index" class="group">
        <div class="col-md-offset-2 col-sm-offset-2">
            <div class="group-label">Language <a class="remove-element col-sm-1 col-md-1" (click)="delete_creator(i)">
            <i class="fa fa-times" aria-hidden="true"></i></a></div>
        </div>
        <language-type [group]="c" [index]="i"></language-type>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element" (click)="add_new()"><i class="fa fa-plus" aria-hidden="true"></i>
                Add New Language</a>
        </div>
    </div>
</div>
`,
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class LanguagesTypeForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    private name : string;

    private myForm : FormGroup;

    public add_new() {
        const control = <FormArray>this.parentForm.controls[this.name];
        control.push(this._fb.group({}));
    }

    public delete_creator(i : number) {
        const control = <FormArray>this.parentForm.controls[this.name];
        control.removeAt(i);
    }

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({});
        this.parentForm.addControl(this.name,this._fb.array([this.myForm]));
    }
}


@Component({
    selector: 'language-type',
    templateUrl : 'app/pages/resourceregistration/shared/templates/language-type.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class LanguageTypeForm implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('index')
    private index: number;

    private myForm : FormGroup;

    private languageTagDesc : Description;
    private languageIdDesc : Description;
    private scriptIdDesc : Description;
    private regionIdDesc : Description;
    private variantIdDesc : Description;

    private scriptIdEnum : EnumValues;
    private regionIdEnum : EnumValues;
    private variantIdEnum : EnumValues;

    private withIdentifier;

    public addIdentifier() {
        this.withIdentifier = true;
        this.myForm.addControl('languageId',new FormControl('',[Validators.required]));
        this.myForm.addControl('scriptId',new FormControl(''));
        this.myForm.addControl('regionId',new FormControl(''));
        this.myForm.addControl('variantId',new FormControl(''));
    }

    public deleteIdentifier() {
        this.withIdentifier = false;
        this.myForm.removeControl('languageId');
        this.myForm.removeControl('scriptId');
        this.myForm.removeControl('regionId');
        this.myForm.removeControl('variantId');

    }

    constructor(private _fb: FormBuilder) {
        this.languageTagDesc = languageTagDesc;
        this.languageIdDesc = languageIdDesc;
        this.scriptIdDesc = scriptIdDesc;
        this.regionIdDesc = regiontIdDesc;
        this.variantIdDesc = variantIdDesc;

        this.scriptIdEnum = scriptIdTypeEnum;
        this.regionIdEnum = regionIdTypeEnum;
        this.variantIdEnum = variantIdTypeEnum;

        this.withIdentifier = false;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            languageTag : ['', Validators.required]
        });
        this.parentForm.addControl('language',this.myForm);
    }
}

