/**
 * Created by pgl on 21/08/17.
 */
import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Service} from "../../domain/eic-model";
import {AuthenticationService} from "../../services/authentication.service";
import {ResourceService} from "../../services/resource.service";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: "service-edit",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-edit.component.css"]
})
export class ServiceEditComponent extends ServiceFormComponent implements OnInit {
    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, private route: ActivatedRoute,
                protected router: Router, private authenticationService: AuthenticationService,
                private location: Location) {
        super(resourceService, fb, router);
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    ngOnInit() {
        super.ngOnInit();
        this.editMode = true;
        this.route.params.subscribe(this.onParams.bind(this));
    }

    onParams(params) {
        this.resourceService.getService(atob(params["id"])).subscribe(this.onService.bind(this), console.error);
    }

    toForms(service: Service) {
        let ret = {};
        Object.entries(service).forEach(([name, values]) => {
            let newValues = values;
            if (Array.isArray(values)) {
                values.forEach(entry => {
                    newValues.push({entry});
                });
            }
            ret[name] = newValues;
        });
        return <Service>ret;
    }

    canEdit(service) {
        service.providers.forEach(provider => {
            if (this.authenticationService.user.email === provider + "@eic") {
                return true;
            }
        });
        return false;
    }

    onService(service) {
        ResourceService.removeNulls(service);
        let ours = false;
        for (let i = 0; i < service.providers.length; i++) {
            if (this.authenticationService.user.email === service.providers[i] + "@eic") {
                ours = true;
                break;
            }
        }
        if (!ours) {
            this.location.back();
        }
        this.serviceForm.patchValue(this.toForms(service));
    }

    onSuccess(service) {
        this.successMessage = "Service edited successfully!";
        this.router.navigate(["/landingPage/service/" + btoa(service.id)]);
    }

    onSubmit(service: Service, isValid: boolean) {
        service.id = atob(
            decodeURIComponent(window.location.href).substr(decodeURIComponent(window.location.href).lastIndexOf(
                "/") + 1));
        super.onSubmit(service, isValid);
    }
}