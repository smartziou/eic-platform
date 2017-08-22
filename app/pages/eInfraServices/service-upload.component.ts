/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: 'service-upload',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-upload.component.css'],
})

export class ServiceUploadComponent extends ServiceFormComponent implements OnInit {
    ngOnInit() {
        this.editMode = false;
    }
    onSuccess(service) {
        this.successMessage = "Service uploaded successfully!";
    }
}