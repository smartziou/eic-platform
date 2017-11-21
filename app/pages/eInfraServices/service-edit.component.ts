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
import {Observable} from "rxjs/Observable";

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
        this.editMode = true;
    }

    ngOnInit() {
        Observable.zip(
            this.resourceService.getProviders(),
            this.resourceService.getVocabularies(),
            this.route.params
        ).subscribe(suc => {
            this.providers = suc[0];
            this.vocabularies = this.transformVocabularies(suc[1]);
            this.resourceService.getService(atob(suc[2]["id"])).subscribe(service => {
                ResourceService.removeNulls(service);
                if (service.providers.indexOf(this.authenticationService.user.email.split("@")[0]) > -1) {
                    this.serviceForm.patchValue(this.toForms(service));
                } else {
                    this.location.back();
                }
            });
        });
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