/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit, Type} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResourceService} from "../../services/resource.service";
import {Service} from "../../domain/eic-model";
import {URLValidator} from "../../services/generic.validator";
import {PhaseValidator, TLRValidator} from "../../services/vocabulary.validator";
import * as sd from "./services.description";
import {CountriesComponent} from "./countries.component";
import {LanguagesComponent} from "./languages.component";
import {RegionsComponent} from "./regions.component";
import {RelatedServicesComponent} from "./relatedServices.component";
import {TagsComponent} from "./tags.component";
import {TermsOfUseComponent} from "./termsOfUse.component";

@Component({
    selector: 'service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.css'],
})

export abstract class ServiceFormComponent implements OnInit {

    editMode: boolean;
    serviceForm: FormGroup;
    service: Service;
    errorMessage: string = null;
    successMessage: string = null;
    submitted = false;
    endpoint = process.env.API_ENDPOINT;
    readonly countriesDesc: sd.Description = sd.countriesDesc;
    readonly regionsDesc: sd.Description = sd.regionsDesc;
    readonly languagesDesc: sd.Description = sd.languagesDesc;
    readonly tagsDesc: sd.Description = sd.tagsDesc;
    readonly relatedServicesDesc: sd.Description = sd.relatedServicesDesc;
    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;
    readonly brandNameDesc: sd.Description = sd.brandNameDesc;
    readonly fullNameDesc: sd.Description = sd.fullNameDesc;
    readonly descriptionDesc: sd.Description = sd.descriptionDesc;
    readonly optionsDesc: sd.Description = sd.optionsDesc;
    readonly targetUsersDesc: sd.Description = sd.targetUsersDesc;
    readonly userValueDesc: sd.Description = sd.userValueDesc;
    readonly userBaseDesc: sd.Description = sd.userBaseDesc;
    readonly providerDesc: sd.Description = sd.providerDesc;
    readonly fundingSourcesDesc: sd.Description = sd.fundingSourcesDesc;
    readonly webpageDesc: sd.Description = sd.webpageDesc;
    readonly logoDesc: sd.Description = sd.logoDesc;
    readonly multimediaURLDesc: sd.Description = sd.multimediaURLDesc;
    readonly versionDesc: sd.Description = sd.versionDesc;
    readonly revisionDateDesc: sd.Description = sd.revisionDateDesc;
    readonly versionHistoryDesc: sd.Description = sd.versionHistoryDesc;
    readonly phaseDesc: sd.Description = sd.phaseDesc;
    readonly technologyReadinessLevelDesc: sd.Description = sd.technologyReadinessLevelDesc;
    readonly categoryDesc: sd.Description = sd.categoryDesc;
    readonly subcategoryDesc: sd.Description = sd.subcategoryDesc;
    readonly requestDesc: sd.Description = sd.requestDesc;
    readonly helpdeskDesc: sd.Description = sd.helpdeskDesc;
    readonly documentationDesc: sd.Description = sd.documentationDesc;
    readonly trainingInformationDesc: sd.Description = sd.trainingInformationDesc;
    readonly feedbackDesc: sd.Description = sd.feedbackDesc;
    readonly pricingModelDesc: sd.Description = sd.pricingModelDesc;
    readonly serviceLevelAgreementDesc: sd.Description = sd.serviceLevelAgreementDesc;
    countriesComponent: Type<CountriesComponent> = CountriesComponent;
    languagesComponent: Type<LanguagesComponent> = LanguagesComponent;
    regionsComponent: Type<RegionsComponent> = RegionsComponent;
    relatedServicesComponent: Type<RelatedServicesComponent> = RelatedServicesComponent;
    tagsComponent: Type<TagsComponent> = TagsComponent;
    termsOfUseComponent: Type<TermsOfUseComponent> = TermsOfUseComponent;
    formGroupMeta = {
        "brandName": ["", Validators.required],
        "tagline": ["", Validators.required],
        "fullName": ["", Validators.required],
        "description": ["", Validators.required],
        "options": [""],
        "targetUsers": [""],
        "userValue": [""],
        "userBase": [""],
        "provider": ["", Validators.required],
        "fundingSources": [""],
        "webpage": ["", Validators.compose([Validators.required, URLValidator])],
        "logo": ["", Validators.compose([Validators.required, URLValidator])],
        "multimediaURL": ["", URLValidator],
        "version": [""],
        "revisionDate": [""],
        "versionHistory": [""],
        "phase": ["", Validators.compose([Validators.required, PhaseValidator])],
        "technologyReadinessLevel": ["", Validators.compose([Validators.required, TLRValidator])],
        "category": ["", Validators.required],
        "subcategory": ["", Validators.required],
        "request": ["", Validators.compose([Validators.required, URLValidator])],
        "helpdesk": ["", URLValidator],
        "documentation": ["", URLValidator],
        "trainingInformation": ["", URLValidator],
        "feedback": ["", URLValidator],
        "pricingModel": ["", Validators.required],
        "serviceLevelAgreement": [""]
    };
    providers: any = null;
    vocabularies: any = null;
    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                this.providers = suc;
                this.serviceForm.patchValue({});
            },
            err => console.error(err)
        );
        this.resourceService.getVocabularies().subscribe(suc => this.onVocabularies(suc), console.error);
    }

    onVocabularies(vocabularies) {
        let ret = {};
        Object.keys(vocabularies).forEach(e=> {
            let item = {};
            item[e] = vocabularies[e];
            let prefix = e.split("_")[0];
            ret[prefix] = ret[prefix] || {};
            Object.assign(ret[prefix], item);
        });
        this.vocabularies = ret;
        this.serviceForm.patchValue({});
    }

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder) {
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    onSubmit(service: Service, isValid: boolean) {
        //TODO: check if model is valid

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

    isDev() {
        return sessionStorage.getItem('dev') === 'aye'
    }

}
