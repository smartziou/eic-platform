import {Component} from "@angular/core";
import {URLValidator} from "../../../shared/validators/generic.validator";
import {MyGroup} from "../../multiforms/my-group.interface";
import * as sd from "../services.description";

@Component({
    selector: "termsOfUseInfo-form",
    template: `
        <div [formGroup]="group">
            <input type="text" formControlName="entry"/>
        </div>
    `,
    styleUrls: ["./multivalued-form-component.css"]
})
export class TermsOfUseComponent extends MyGroup {
    readonly groupDefinition = {entry: ["", URLValidator]};
    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;

    ngOnInit() {
        super.ngOnInit();
    }
}