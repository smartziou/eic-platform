import {Component, Injector} from "@angular/core";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";

@Component({
    selector: "languagesInfo-form",
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of languages | keys" [ngValue]="c">{{languages[c]}}</option>
            </select>
        </div>
    `
})
export class LanguagesComponent extends MyGroup {
    languages: any = {
        "qq": "Error fetching languages"
    };
    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, LanguageValidator])],
        entry: ["", Validators.required]
    };
    readonly languagesDesc: sd.Description = sd.languagesDesc;

    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies("Language").subscribe(suc => this.languages = suc);
    }
}