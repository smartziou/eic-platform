/**
 * Created by pgl on 21/08/17.
 */
import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
import {Service} from "../../domain/eic-model";

@Component({
    selector: 'service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.css'],
})

export abstract class ServiceFormComponent {

    protected editMode: boolean;
    protected serviceForm: FormGroup;
    protected service: Service;
    protected errorMessage: string = null;
    protected successMessage: string = null;
    protected submitted = false;
    protected endpoint = process.env.API_ENDPOINT;
    protected formGroupMeta = {
        "brandName": [""],
        "tagline": ["", Validators.required],
        "fullName": ["", Validators.required],
        "description": ["", Validators.required],
        "options": [""],
        "targetUsers": [""],
        "userValue": [""],
        "userBase": [""],
        "provider": ["", Validators.required],
        "fundingSources": [""],
        "webpage": ["", Validators.required],
        "logo": ["", Validators.required],
        "multimediaURL": [""],
        "version": [""],
        "revisionDate": [""],
        "versionHistory": [""],
        "phase": ["", Validators.required],
        "technologyReadinessLevel": ["", Validators.required],
        "category": ["", Validators.required],
        "subcategory": ["", Validators.required],
        "countries": ["", Validators.required],
        "regions": ["", Validators.required],
        "languages": ["", Validators.required],
        "tags": ["", Validators.required],
        "relatedServices": ["", Validators.required],
        "request": ["", Validators.required],
        "helpdesk": [""],
        "documentation": [""],
        "trainingInformation": [""],
        "feedback": [""],
        "pricingModel": ["", Validators.required],
        "serviceLevelAgreement": [""],
        "termsOfUse": ["", Validators.required]
    };

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder) {
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    onSubmit(service: Service, isValid: boolean) {
        //TODO: check if model is valid
        console.log(service, isValid);

        if (isValid) {
            this.resourceService.uploadService(service, this.editMode).subscribe(user => this.onSuccess, error => this.onUploadError);
        } else {
            this.errorMessage = 'Form not valid';
        }
    }

    abstract onSuccess(service);

    onUploadError(error) {
        this.errorMessage = <any>error;
    }

}