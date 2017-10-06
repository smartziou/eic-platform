/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {ServiceFormComponent} from "./service-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ResourceService} from "../../services/resource.service";
import {FormBuilder} from "@angular/forms";
import {Service} from "../../domain/eic-model";

@Component({
    selector: 'service-edit',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-edit.component.css'],
})

export class ServiceEditComponent extends ServiceFormComponent implements OnInit {

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, private route: ActivatedRoute, protected router: Router) {
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

    onService(service) {
        ResourceService.removeNulls(service);
        this.serviceForm.patchValue(service)
    }

    onSuccess(service) {
        this.successMessage = "Service edited successfully!";
        this.router.navigate(['/landingPage/service/' + btoa(service.id)]);
    }

    onSubmit(service: Service, isValid: boolean) {
        service.id = atob(decodeURIComponent(window.location.href).substr(decodeURIComponent(window.location.href).lastIndexOf('/') + 1));
        super.onSubmit(service, true);
    }
}