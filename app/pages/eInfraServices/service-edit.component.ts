/**
 * Created by pgl on 21/08/17.
 */

import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../domain/eic-model";
import {AuthenticationService} from "../../services/authentication.service";
import {NavigationService} from "../../services/navigation.service";
import {ResourceService} from "../../services/resource.service";
import {UserService} from "../../services/user.service";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: "service-edit",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-edit.component.css"]
})
export class ServiceEditComponent extends ServiceFormComponent implements OnInit {
    private sub: Subscription;
    private serviceID: string;

        super(resourceService, fb, router);
    constructor(public resourceService: ResourceService, public fb: FormBuilder, public route: ActivatedRoute,
                public router: NavigationService, public authenticationService: AuthenticationService,
                public location: Location, public userService: UserService) {
        this.editMode = true;
    }

    ngOnInit() {
        super.ngOnInit();
        this.sub = this.route.params.subscribe(params => {
            this.serviceID = params["id"];
            this.resourceService.getService(this.serviceID).subscribe(service => {
                if (this.userService.canEditService(service)) {
                    ResourceService.removeNulls(service);
                    this.serviceForm.patchValue(this.toForms(service));
                } else {
                    this.location.back();
                }
            });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    toForms(service: Service) {
        let ret = {};
        Object.entries(service).forEach(([name, values]) => {
            let newValues = [];
            if (Array.isArray(values)) {
                values.forEach(entry => {
                    newValues.push({entry});
                });
            } else {
                newValues = values;
            }
            ret[name] = newValues;
        });
        return <Service>ret;
    }

    onSuccess(service) {
        this.successMessage = "Service edited successfully!";
        this.router.service(service.id);
    }

    onSubmit(service: Service, isValid: boolean) {
        service.id = this.serviceID;
        super.onSubmit(service, isValid);
    }
}