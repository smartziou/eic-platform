import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {LanguageValidator} from "../../services/vocabulary.validator";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'languagesInfo-form',
    template : `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of languages | keys" [ngValue]="c">{{languages[c]}}</option>
            </select>
        </div>
    `
})

export class LanguagesComponent extends MyGroup {

    languages = {
        "el": "Greek",
        "en": "English",
        "sr": "Serbian"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, LanguageValidator])],
        entry : ["", Validators.compose([Validators.required])],
    };

    readonly languagesDesc : sd.Description = sd.languagesDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}