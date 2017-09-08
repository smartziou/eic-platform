import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'regionsInfo-form',
    template : `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of regions | keys" [ngValue]="c">{{regions[c]}}</option>
            </select>
        </div>
    `
})

export class RegionsComponent extends MyGroup {

    regions = {
        "UEFA": "Europe",
        "CONMEBOL": "South America",
        "CONCACAF": "North, Central America and the Caribbean"
    };

    readonly groupDefinition = {
        entry : ["", Validators.required]
    };

    readonly regionsDesc : sd.Description = sd.regionsDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}