import {Component, Injector} from "@angular/core";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";

@Component({
    selector: 'placesInfo-form',
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of places | keys" [ngValue]="c">{{places[c]}}</option>
            </select>
        </div>
    `
})

export class PlacesComponent extends MyGroup {
    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    places: any = {
        "QQ": "Error fetching places"
    };

    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, CountryValidator])]
        entry: ["", Validators.compose([Validators.required])]
    };

    readonly placesDesc: sd.Description = sd.placesDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies("Country").subscribe(suc => this.places = suc);
    }

}