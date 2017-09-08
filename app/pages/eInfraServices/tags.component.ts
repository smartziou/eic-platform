import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'tagsInfo-form',
    template : `
        <div [formGroup]="group">
                <input type="text" formControlName="entry"/>
        </div>
    `
})

export class TagsComponent extends MyGroup {

    readonly groupDefinition = {
        entry : ["", Validators.required]
    };

    readonly tagsDesc : sd.Description = sd.tagsDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}