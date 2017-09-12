import {Component, Injector} from "@angular/core";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'relatedServicesInfo-form',
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of relatedServices | keys" [ngValue]="c">{{relatedServices[c]}}</option>
            </select>
        </div>
    `
})

export class RelatedServicesComponent extends MyGroup {

    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    relatedServices: any = {
        "00.00": "Failed to fetch services"
    };

    readonly groupDefinition = {
        entry: ["", Validators.required]
    };

    readonly relatedServicesDesc: sd.Description = sd.relatedServicesDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getServices().subscribe(
            suc => this.relatedServices = this.transformInput(suc),
            err => console.error(err)
        );
    }

    transformInput(input) {
        return Object.keys(input).reduce((accumulator, value) => {
            console.log(value);
            accumulator[value] = input[value][0].provider + " - " + input[value][0].brandName;
            return accumulator;
        }, {});
    }
}