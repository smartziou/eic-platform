/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {ServiceFormComponent} from "./service-form.component";

@Component({
    selector: 'service-edit',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-edit.component.css'],
})

export class ServiceEditComponent extends ServiceFormComponent implements OnInit {
    ngOnInit() {
        this.editMode = true;
        this.resourceService.getService("01.01").subscribe(this.onService.bind(this), console.error);
    }

    onService(service) {
        for (let i in this.formGroupMeta) {
            this.formGroupMeta[i][0] = service[i] ||　this.formGroupMeta[i][0]　|| "";
        }
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    onSuccess(service) {
        this.successMessage = "Service edited successfully!";
    }
}