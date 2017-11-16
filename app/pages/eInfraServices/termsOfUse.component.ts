import {Component} from "@angular/core";
import {Validators} from "@angular/forms";
import {URLValidator} from "../../services/generic.validator";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";

@Component({
    selector: "termsOfUseInfo-form",
    template: `
        <div [formGroup]="group">
            <input type="text" formControlName="entry"/>
        </div>
    `
})
export class TermsOfUseComponent extends MyGroup {
    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, URLListValidator])]
        entry: ["", Validators.compose([Validators.required, URLValidator])]
    };
    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;

    ngOnInit() {
        super.ngOnInit();
    }
}