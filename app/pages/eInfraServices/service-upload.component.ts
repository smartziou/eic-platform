/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../domain/eic-model";
import {NavigationService} from "../../services/navigation.service";
import {ResourceService} from "../../services/resource.service";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: "service-upload",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-upload.component.css"]
})
export class ServiceUploadComponent extends ServiceFormComponent implements OnInit {
    private sub: Subscription;

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, protected router: NavigationService) {
        super(resourceService, fb, router);
        this.editMode = false;
    }

    ngOnInit() {
        super.ngOnInit();
    }

    onSuccess(service) {
        this.successMessage = "Service uploaded successfully!";
    }

    onSubmit(service: Service, isValid: boolean) {
        super.onSubmit(service, isValid);
    }

}