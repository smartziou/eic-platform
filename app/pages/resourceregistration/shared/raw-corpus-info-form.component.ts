/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MyStringFormControl } from "./my-string-form.component";
import {CorpusTextPartInfoFormControl} from "./corpusTextPartInfo.component";
import {MyGroup} from "../myform/my-group.interface";

@Component({
    selector: 'raw-corpus-info-form',
    template : `
    <div [formGroup]="group" >
        <div formGroupName="corpusMediaPartsType">
            <div formArrayName="corpusTextParts">


            </div>
        </div>
    </div>
`,
    styleUrls : ['./templates/common.css']
})

export class RawCorpusInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        corpusMediaPartsType: this._fb.group({
        }),
        corpusSubtype : "rawCorpus"
    };
}