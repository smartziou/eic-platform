import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'relatedServicesInfo-form',
    template : `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of relatedServices | keys" [ngValue]="c">{{relatedServices[c]}}</option>
            </select>
        </div>
    `
})

export class RelatedServicesComponent extends MyGroup {

    relatedServices = {
        "01.01": "Cloud Container Compute",
        "02.01": "B2SAFE",
        "03.01": "GÉANT IP"
    };

    readonly groupDefinition = {
        entry : ["", Validators.required]
    };

    readonly relatedServicesDesc : sd.Description = sd.relatedServicesDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}