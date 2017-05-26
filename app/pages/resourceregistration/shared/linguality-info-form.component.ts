/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EnumValues, multilingualityTypeEnum, lingualityTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'linguality-info',
    template : `
    <div [formGroup]="myForm" >
        <label class="col-sm-2 col-md-2 control-label">Linguality Info</label>
        <div class="col-sm-3 col-md-3" [ngClass]="{'has-error':!myForm.controls.lingualityType.valid}">
            <select name="role" class="form-control" formControlName="lingualityType">
                <option *ngFor="let value of lingualityTypes" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </div>
        <ng-template [ngIf]="myForm.controls.lingualityType.value != '' && myForm.controls.lingualityType.value != 'MONOLINGUAL'">
            <div class="col-sm-3 col-md-3">
                <select name="role" class="form-control" formControlName="multilingualityType">
                    <option *ngFor="let value of multiLingualityTypes" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </div>
            <div class="col-sm-3 col-md-3">
                <input type="text" class="form-control" formControlName="multilingualityTypeDetails" placeholder="Multilinguality type details">
            </div>
        </ng-template>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class LingualityInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('index')
    index: number = -1;

    public myForm : FormGroup;

    private lingualityTypes: EnumValues[];
    private multiLingualityTypes: EnumValues[];

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {
        this.lingualityTypes = lingualityTypeEnum;
        this.multiLingualityTypes = multilingualityTypeEnum;
    }

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            multilingualityTypeDetails : '',
            lingualityType: ['',Validators.required],
            multilingualityType: ''
        });
    }

    ngOnInit() {
        this.myForm = LingualityInfoFormControl.generate(this._fb);
        if(this.index == -1) {
            this.parentForm.addControl("lingualityInfo", this.myForm);
        } else {
            this.myForm = this.parentForm;
        }
    }
}