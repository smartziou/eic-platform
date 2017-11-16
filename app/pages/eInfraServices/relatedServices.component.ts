import {Component, Injector} from "@angular/core";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";

@Component({
    selector: "relatedServicesInfo-form",
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of relatedServices | keys" [ngValue]="c">{{relatedServices[c]}}</option>
            </select>
        </div>
    `
})
export class RelatedServicesComponent extends MyGroup {
    relatedServices: any = {
        "00.00": "Failed to fetch services"
    };
    readonly groupDefinition = {
        entry: ["", Validators.required]
    };
    readonly relatedServicesDesc: sd.Description = sd.relatedServicesDesc;

    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getServices().subscribe(suc => this.relatedServices = this.transformInput(suc));
    }

    transformInput(input) {
        return Object.keys(input).reduce((accumulator, value) => {
            accumulator[value] = input[value][0].providers + " - " + input[value][0].name;
            return accumulator;
        }, {});
    }
}