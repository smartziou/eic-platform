import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {EnumValues, rightsStmtNameEnum, licenceEnum, versionEnum} from "./omtd.enum";
import {Description, rightsStatementInfoDesc, licenceInfoDesc} from "./omtd.description";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'rights-info',
    template: `
    <license-infos [group]="myForm"></license-infos>
    <rights-statement-info [group]="myForm"></rights-statement-info>
`,
    styleUrls: ['./templates/common.css']
})
export class RightsInfoForm implements OnInit {
    @Input('group')
    parentForm: FormGroup;

    myForm: FormGroup;

    constructor(private _fb: FormBuilder){

    }

    ngOnInit(): void {
        this.myForm = this._fb.group({});
        this.parentForm.addControl("rightsInfo",this.myForm);
    }

}


@Component({
    selector: 'rights-statement-info',
    template: `
<div [formGroup]="myForm" class="form-group">
    <label class="col-sm-2 col-md-2 control-label">{{rightsStmtDescription.label}}</label>
    <div class="col-sm-6 col-md-6">
        <input type="text" class="form-control" formControlName="rightsStmtURL" placeholder="URL">
    </div>
    <div class="col-sm-3 col-md-3">
        <select name="role" class="form-control" formControlName="rightsStmtName">
            <option *ngFor="let value of rightsStmtName" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
</div>

`,
    styleUrls: ['./templates/common.css']
})
export class RightsStatementInfoForm implements OnInit {
    @Input('group')
    parentForm: FormGroup;

    myForm: FormGroup;

    rightsStmtName : EnumValues[];
    rightsStmtDescription : Description;

    constructor(private _fb: FormBuilder){
        this.rightsStmtName = rightsStmtNameEnum;
        this.rightsStmtDescription = rightsStatementInfoDesc;
    }

    static generate(_fb : FormBuilder) {
        return _fb.group({
            rightsStmtName : '',
            rightsStmtURL : ''
        })
    }

    ngOnInit(): void {
        this.myForm = RightsStatementInfoForm.generate(this._fb);
        this.parentForm.addControl('rightsStmtInfo',this.myForm);
    }

}

@Component({
    selector: 'license-infos',
    template: `
<div [formGroup]="formArray" class="form-group">
    <label class="col-sm-2 col-md-2 control-label">{{licenceInfosDesc.label}}</label>
    <div *ngFor="let c of formArray.controls; let i=index" formGroupName="{{i}}">
        <div *ngIf="i!=0" class="col-sm-2 col-md-2 control-label"></div>
        <div class="form-group">
            <div class="col-sm-5 col-md-5">
                <select name="role" class="form-control" formControlName="licence">
                    <option *ngFor="let value of licenceEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </div>
            <div class="col-sm-3 col-md-3">
                <select name="role" class="form-control" formControlName="version">
                    <option *ngFor="let value of versionEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </div>
            <div class="col-sm-1 col-md-1">
                <a class="remove-element col-sm-1 col-md-1" (click)="$delete(i)"><i
                        class="fa fa-times" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
        <a class="add-new-element" (click)="add()"><i class="fa fa-plus" aria-hidden="true"></i>
            Add New {{label}}</a>
    </div>
</div>
`,
    styleUrls: ['./templates/common.css']
})
export class LicenseInfosForm implements OnInit {
    @Input('group')
    parentForm: FormGroup;

    formArray : FormArray;

    licenceEnum : EnumValues[];
    versionEnum : EnumValues[];

    licenceInfosDesc : Description;

    constructor(private _fb: FormBuilder){
        this.licenceEnum = licenceEnum;
        this.versionEnum = versionEnum;
        this.licenceInfosDesc = licenceInfoDesc;
    }

    add() {
        this.formArray.push(LicenseInfosForm.generate(this._fb));
    }

    $delete(i : number) {
        this.formArray.removeAt(i);
    }

    ngOnInit(): void {
        this.formArray = this._fb.array([LicenseInfosForm.generate(this._fb)]);
        this.parentForm.addControl("licenceInfos",this.formArray);
    }

    static generate(_fb : FormBuilder) {
        return _fb.group({
            licence : '',
            version : ''
        });
    }

}