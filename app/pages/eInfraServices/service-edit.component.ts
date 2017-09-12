/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {ServiceFormComponent} from "./service-form.component";
import {ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../services/resource.service";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'service-edit',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-edit.component.css'],
})

export class ServiceEditComponent extends ServiceFormComponent implements OnInit {

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, private route: ActivatedRoute) {
        super(resourceService, fb);
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
        setTimeout(() => {
            this.serviceForm.patchValue(service)
        }, 1000);
    }

    onSuccess(service) {
        this.successMessage = "Service edited successfully!";
    }
}