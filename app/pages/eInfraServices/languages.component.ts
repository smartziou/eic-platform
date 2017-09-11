import {Component, Injector} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {LanguageValidator} from "../../services/vocabulary.validator";
import {ResourceService} from "../../services/resource.service";
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


    constructor(private resourceService: ResourceService, injector : Injector) {
        super(injector);
    }

    private languages : any = {
        "qq": "Error fetching languages"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, LanguageValidator])],
        entry : ["", Validators.compose([Validators.required])],
    };

    readonly languagesDesc : sd.Description = sd.languagesDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies().subscribe(
            suc=> this.languages = this.transformInput(suc["Language"]),
            err => console.error(err)
        );
        setTimeout(()=>console.log(this.languages), 10000);
    }

    transformInput(input) {
        console.log(input);
        let ret = {};
        input.forEach((e,i,a) => {
            ret[e.id] = e.name;
        });
        return ret;
    }
}