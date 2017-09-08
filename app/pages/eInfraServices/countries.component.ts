import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {CountryValidator} from "../../services/vocabulary.validator";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'countriesInfo-form',
    template : `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of countries | keys" [ngValue]="c">{{countries[c]}}</option>
            </select>
        </div>
    `
})

export class CountriesComponent extends MyGroup {

    countries = {
        "GR": "Greece",
        "ET": "Abyssinia",
        "SY": "Palmyra"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, CountryValidator])]
        entry : ["", Validators.compose([Validators.required])]
    };

    readonly countriesDesc : sd.Description = sd.countriesDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}