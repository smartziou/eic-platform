/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {Service} from "../../domain/eic-model";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: "service-upload",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-upload.component.css"]
})
export class ServiceUploadComponent extends ServiceFormComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.editMode = false;
    }

    ngOnInit() {
        Observable.zip(
            this.resourceService.getProviders(),
            this.resourceService.getVocabularies()
        ).subscribe(suc => {
            this.providers = suc[0];
            this.vocabularies = this.transformVocabularies(suc[1]);
        });
    }

    onSuccess(service) {
        this.successMessage = "Service uploaded successfully!";
    }

    onSubmit(service: Service, isValid: boolean) {
        service.id = this.getRandomInt(300, 500);
        super.onSubmit(service, isValid);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}