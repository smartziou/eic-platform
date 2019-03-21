/**
 * Created by pgl on 21/08/17.
 */

import {DatePipe, Location} from "@angular/common";
import {Component, Injector, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../domain/eic-model";
import {AuthenticationService} from "../../services/authentication.service";
import {ResourceService} from "../../services/resource.service";
import {ServiceFormComponent} from "./service-form.component";
import {getLocale} from "ngx-bootstrap/bs-moment/locale/locales.service";

@Component({
    selector: "service-edit",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-edit.component.css"]
})
export class ServiceEditComponent extends ServiceFormComponent implements OnInit {
    private sub: Subscription;
    private serviceID: string;

    constructor(public route: ActivatedRoute,
                public authenticationService: AuthenticationService,
                public location: Location,
                protected injector: Injector,
                public datePipe: DatePipe) {
        super(injector);
        this.editMode = true;
    }

    ngOnInit() {
        super.ngOnInit();
        this.sub = this.route.params.subscribe(params => {
            this.serviceID = params["id"];
            this.resourceService.getService(this.serviceID).subscribe(service => {

                /*if (this.userService.canEditService(service)) {*/
                    ResourceService.removeNulls(service);
                    this.serviceForm.patchValue(this.toForms(service));
                    let lastUpdate = new Date(this.serviceForm.get('lastUpdate').value);
                    let date = this.datePipe.transform(lastUpdate, 'yyyy-MM-dd');
                    this.serviceForm.get('lastUpdate').setValue(date);
                    let validFor = new Date(this.serviceForm.get('validFor').value);
                    date = this.datePipe.transform(lastUpdate, 'yyyy-MM-dd');
                    this.serviceForm.get('validFor').setValue(date);
                /*} else {
                    this.location.back();
                }*/
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