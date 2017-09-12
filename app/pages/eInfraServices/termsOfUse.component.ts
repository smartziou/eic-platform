import {Component} from "@angular/core";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'termsOfUseInfo-form',
    template: `
        <div [formGroup]="group">
            <input type="text" formControlName="entry"/>
        </div>
    `
})

export class TermsOfUseComponent extends MyGroup {

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, URLListValidator])]
        entry: ["", Validators.compose([Validators.required])]
    };

    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}