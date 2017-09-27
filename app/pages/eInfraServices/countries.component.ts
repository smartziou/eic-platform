import {Component, Injector} from "@angular/core";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'countriesInfo-form',
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of countries | keys" [ngValue]="c">{{countries[c]}}</option>
            </select>
        </div>
    `
})

export class CountriesComponent extends MyGroup {
    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    countries: any = {
        "QQ": "Error fetching countries"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, CountryValidator])]
        entry: ["", Validators.compose([Validators.required])]
    };

    readonly placesDesc: sd.Description = sd.placesDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies("Country").subscribe(
            suc => this.countries = suc,
            err => console.error(err)
        );
    }

}