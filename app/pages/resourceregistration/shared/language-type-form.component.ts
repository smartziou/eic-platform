/**
 * Created by stefanos on 6/12/2016.
 */
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Description, languageIdDesc, scriptIdDesc, variantIdDesc,regiontIdDesc,languageTagDesc} from "../../../domain/omtd.description";
import {
    EnumValues, personIdentifierSchemeNameEnum, scriptIdTypeEnum, regionIdTypeEnum,
    variantIdTypeEnum, languageIdTypeEnum
} from "../../../domain/omtd.enum";



@Component({
    selector: 'languages-types',
    template : `
    
<div [formGroup]="parentForm">
    <div *ngFor="let c of myForm.controls; let i=index" class="group">
        <div class="form-group">
            <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                <div class="group-label">
                    <span>Language</span>
                    <a class="remove-element" (click)="delete_creator(i)">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <!--<div formGroupName="{{i}}">-->
                <!--<related-common [group]="c" [personLabel]="label" [index]="i" [type]="type"></related-common>-->
            <!--</div>-->
        </div>
        <!--<div class="col-md-offset-2 col-sm-offset-2">-->
            <!--<div class="group-label">Language <a class="remove-element col-sm-1 col-md-1" (click)="delete_creator(i)">-->
            <!--<i class="fa fa-times" aria-hidden="true"></i></a></div>-->
        <!--</div>-->
        <language-type [group]="c" [index]="i" [name]="name"></language-type>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element add-new-group" (click)="add_new()"><i class="fa fa-plus" aria-hidden="true"></i>
                Add New Language</a>
        </div>
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class LanguagesTypeForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    private name : string;

    private myForm : FormArray;

    public add_new() {
        this.myForm.push(LanguageTypeForm.addNew(this._fb));
    }

    public delete_creator(i : number) {
        this.myForm.removeAt(i);
    }

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.array([LanguageTypeForm.addNew(this._fb)]);

        var self = this;
        this.myForm.patchValue = (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
            for(var i = self.myForm.length; i < Object.keys(value).length; i++ ) {
                self.add_new();
            }
            Object.keys(value).forEach(name => {
                if (self.myForm.controls[name]) {
                    self.myForm.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.myForm.updateValueAndValidity({onlySelf, emitEvent});
        };

        this.parentForm.addControl(this.name,this.myForm);
    }
}


@Component({
    selector: 'language-type',
    templateUrl : './templates/language-type-form.component.html',
    styleUrls : ['./templates/common.css']
})
export class LanguageTypeForm implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    public name: string;

    @Input('index')
    private index: number = -1;

    private myForm : FormGroup;

    private languageTagDesc : Description;
    private languageIdDesc : Description;
    private scriptIdDesc : Description;
    private regionIdDesc : Description;
    private variantIdDesc : Description;

    private languageIdEnum : EnumValues[];
    private scriptIdEnum : EnumValues[];
    private regionIdEnum : EnumValues[];
    private variantIdEnum : EnumValues[];

    private withIdentifier;

    static validate( c :AbstractControl) {
        if(!c.get('languageId').value &&
            (c.get("scriptId").value || c.get("regionId").value || c.get("variantId").value)) {
            return {error: "If language is set and required"};
        }
        else
            return null;
    }

    public addIdentifier() {
        this.withIdentifier = true;
        this.parentForm.addControl('languageId',new FormControl('',[Validators.required]));
        this.parentForm.addControl('scriptId',new FormControl(''));
        this.parentForm.addControl('regionId',new FormControl(''));
        this.parentForm.addControl('variantId',new FormControl(''));
    }

    public deleteIdentifier() {
        this.withIdentifier = false;
        this.parentForm.removeControl('languageId');
        this.parentForm.removeControl('scriptId');
        this.parentForm.removeControl('regionId');
        this.parentForm.removeControl('variantId');

    }

    static addNew(_fb : FormBuilder) : FormGroup {
        return _fb.group({
            languageTag : ['', Validators.required],
            languageId : '',
            scriptId : '',
            regionId : '',
            variantId: ''
        },{validator : LanguageTypeForm.validate});
    }

    constructor(private _fb: FormBuilder) {
        this.languageTagDesc = languageTagDesc;
        this.languageIdDesc = languageIdDesc;
        this.scriptIdDesc = scriptIdDesc;
        this.regionIdDesc = regiontIdDesc;
        this.variantIdDesc = variantIdDesc;

        this.languageIdEnum = languageIdTypeEnum;
        this.scriptIdEnum = scriptIdTypeEnum;
        this.regionIdEnum = regionIdTypeEnum;
        this.variantIdEnum = variantIdTypeEnum;

        this.withIdentifier = true;
    }

    ngOnInit() {
    }
}

