import {Component, Injector} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
// import {KeysPipe} from "../../services/key.pipe";

@Component({
    selector: 'regionsInfo-form',
    template : `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of regions | keys" [ngValue]="c">{{regions[c]}}</option>
            </select>
        </div>
    `
})

export class RegionsComponent extends MyGroup {

    constructor(private resourceService: ResourceService, injector : Injector) {
        super(injector);
    }

    private regions : any = {
        "QQ": "Error fetching regions"
    };

    readonly groupDefinition = {
        entry : ["", Validators.required]
    };

    readonly regionsDesc : sd.Description = sd.regionsDesc;

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getVocabularies().subscribe(
            suc=> this.regions = this.transformInput(suc["Region"]),
            err => console.error(err)
        );
    }

    transformInput(input) {
        if (!input) {
            return {};
        }
        let ret = {};
        input.forEach((e,i,a) => {
            ret[e.id] = e.name;
        });
        return ret;
    }
}