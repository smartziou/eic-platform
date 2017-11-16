/**
 * Created by pgl on 15/11/17.
 */
import {Component, Injector} from "@angular/core";
import {Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
import {MyGroup} from "../multiforms/my-group.interface";
import * as sd from "./services.description";

@Component({
    selector: "providersInfo-form",
    template: `
        <div [formGroup]="group">
            <select formControlName="entry">
                <option *ngFor="let c of providers | keys" [ngValue]="c">{{providers[c]}}</option>
            </select>
        </div>
    `
})
export class ProvidersComponent extends MyGroup {
    providers: any = {
        "qq": "Error fetching providers"
    };
    readonly groupDefinition = {
        //entry : ["", Validators.compose([Validators.required, ProviderValidator])],
        entry: ["", Validators.compose([Validators.required])]
    };
    readonly providersDesc: sd.Description = sd.providersDesc;

    constructor(private resourceService: ResourceService, injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getProviders().subscribe(suc => this.providers = suc);
    }
}