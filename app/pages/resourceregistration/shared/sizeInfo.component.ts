/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EnumValues, sizeUnitEnum } from "../../../domain/omtd.enum";
import {MyGroup} from "../myform/my-group.interface";
import {Description, sizeDesc, sizeInfoDesc, sizeUnitDesc} from "../../../domain/omtd.description";

@Component({
    selector: 'sizeInfo-form',
    template : `
    <div [formGroup]="group" >
        <div class="col-sm-8 col-md-8" [ngClass]="{'has-error':!getMyControl('size')}">
            <input type="text" class="form-control" formControlName="size" placeholder="Size">
        </div>
        <div class="col-sm-4 col-md-4" [ngClass]="{'has-error':!getMyControl('sizeUnit')}">
            <select name="role" class="form-control" formControlName="sizeUnit">
                <option *ngFor="let value of sizeUnitEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </div>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class SizeInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        size : ['', Validators.required],
        sizeUnit : ['', Validators.required]
    };


    private sizeDesc : Description = sizeDesc;
    private sizeInfoDesc : Description = sizeInfoDesc;
    private sizeUnitDesc : Description = sizeUnitDesc;
    private sizeUnitEnum : EnumValues[] = sizeUnitEnum;

}