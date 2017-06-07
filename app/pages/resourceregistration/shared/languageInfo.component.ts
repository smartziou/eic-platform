/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LanguageTypeForm } from "./language-type-form.component";
import { SizeInfoFormControl } from "./sizeInfo.component";
import {MyGroup} from "../myform/my-group.interface";
import {Description, sizeInfoDesc} from "../../../domain/omtd.description";

@Component({
    selector: 'languageInfo-form',
    template : `

<div [formGroup]="group">
    <languageType-form [parentGroup]="group" [name]="'language'"></languageType-form>
    
    <div class="form-group-divider"></div>
    <form-inline [description]="sizeInfoDesc">
        <sizeInfo-form [parentGroup]="group" [name]="'sizePerLanguage'"></sizeInfo-form>
    </form-inline>
</div>

`,
    styleUrls : ['./templates/common.css']
})

export class LanguageInfoFormControl extends MyGroup {

    readonly groupDefinition = {

    };

    readonly sizeInfoDesc : Description = sizeInfoDesc;
}