import {Component, Injector} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {CountryValidator} from "../../services/vocabulary.validator";
import {ResourceService} from "../../services/resource.service";
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
    constructor(private resourceService: ResourceService, injector : Injector) {
        super(injector);
    }

    private countries : any = {
        "QQ": "Error fetching countries"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, CountryValidator])]
        entry : ["", Validators.compose([Validators.required])]
    };

    readonly countriesDesc : sd.Description = sd.countriesDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies().subscribe(
            suc=> this.countries = this.transformInput(suc["Country"]),
            err => console.error(err)
        );
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