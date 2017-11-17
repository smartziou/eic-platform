/**
 * Created by pgl on 21/08/17.
 */
import {Component, OnInit, Type} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Service} from "../../domain/eic-model";
import {URLValidator} from "../../services/generic.validator";
import {ResourceService} from "../../services/resource.service";
import {PhaseValidator, TLRValidator} from "../../services/vocabulary.validator";
import {LanguagesComponent} from "./languages.component";
import {PlacesComponent} from "./places.component";
import {ProvidersComponent} from "./providers.component";
import {RelatedServicesComponent} from "./relatedServices.component";
import {RequiredServicesComponent} from "./requiredServices.component";
import * as sd from "./services.description";
import {TagsComponent} from "./tags.component";
import {TermsOfUseComponent} from "./termsOfUse.component";

@Component({
    selector: "service-form",
    templateUrl: "./service-form.component.html",
    styleUrls: ["./service-form.component.css"]
})
export class ServiceFormComponent implements OnInit {
    editMode: boolean;
    serviceForm: FormGroup;
    service: Service;
    errorMessage: string = null;
    successMessage: string = null;
    submitted = false;
    readonly urlDesc: sd.Description = sd.urlDesc;
    readonly nameDesc: sd.Description = sd.nameDesc;
    readonly taglineDesc: sd.Description = sd.taglineDesc;
    readonly descriptionDesc: sd.Description = sd.descriptionDesc;
    readonly optionsDesc: sd.Description = sd.optionsDesc;
    readonly targetUsersDesc: sd.Description = sd.targetUsersDesc;
    readonly userValueDesc: sd.Description = sd.userValueDesc;
    readonly userBaseDesc: sd.Description = sd.userBaseDesc;
    readonly symbolDesc: sd.Description = sd.symbolDesc;
    readonly multimediaURLDesc: sd.Description = sd.multimediaURLDesc;
    readonly providersDesc: sd.Description = sd.providersDesc;
    readonly versionDesc: sd.Description = sd.versionDesc;
    readonly lastUpdateDesc: sd.Description = sd.lastUpdateDesc;
    readonly changeLogDesc: sd.Description = sd.changeLogDesc;
    //whereis validForDesc
    readonly lifeCycleStatusDesc: sd.Description = sd.lifeCycleStatusDesc;
    readonly trlDesc: sd.Description = sd.trlDesc;
    readonly categoryDesc: sd.Description = sd.categoryDesc;
    readonly subcategoryDesc: sd.Description = sd.subcategoryDesc;
    readonly placesDesc: sd.Description = sd.placesDesc;
    readonly languagesDesc: sd.Description = sd.languagesDesc;
    readonly tagsDesc: sd.Description = sd.tagsDesc;
    readonly requiredServicesDesc: sd.Description = sd.requiredServicesDesc;
    readonly relatedServicesDesc: sd.Description = sd.relatedServicesDesc;
    readonly requestDesc: sd.Description = sd.requestDesc;
    readonly helpdeskDesc: sd.Description = sd.helpdeskDesc;
    readonly userManualDesc: sd.Description = sd.userManualDesc;
    readonly trainingInformationDesc: sd.Description = sd.trainingInformationDesc;
    readonly feedbackDesc: sd.Description = sd.feedbackDesc;
    readonly priceDesc: sd.Description = sd.priceDesc;
    readonly serviceLevelAgreementDesc: sd.Description = sd.serviceLevelAgreementDesc;
    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;
    readonly fundingDesc: sd.Description = sd.fundingDesc;
    placesComponent: Type<PlacesComponent> = PlacesComponent;
    languagesComponent: Type<LanguagesComponent> = LanguagesComponent;
    providersComponent: Type<ProvidersComponent> = ProvidersComponent;
    tagsComponent: Type<TagsComponent> = TagsComponent;
    requiredServicesComponent: Type<RequiredServicesComponent> = RequiredServicesComponent;
    relatedServicesComponent: Type<RelatedServicesComponent> = RelatedServicesComponent;
    termsOfUseComponent: Type<TermsOfUseComponent> = TermsOfUseComponent;
    formGroupMeta = {
        "url": ["", Validators.compose([Validators.required, URLValidator])],
        "name": ["", Validators.required],
        "tagline": [""],
        "description": ["", Validators.required],
        "options": [""],
        "targetUsers": [""],
        "userValue": [""],
        "userBase": [""],
        "symbol": ["", URLValidator],
        "multimediaURL": ["", URLValidator],
        //providers is defined in component
        "version": [""],
        "lastUpdate": [""],
        "changeLog": [""],
        //"validFor": [""],
        "lifeCycleStatus": ["", Validators.compose([Validators.required, PhaseValidator])],
        "trl": ["", Validators.compose([Validators.required, TLRValidator])],
        "category": ["", Validators.required],
        "subcategory": ["", Validators.required],
        //place is defined in component
        //lang is defined in component
        //tags is defined in component
        //requiredServices is defined in component
        //relatedServices is defined in component
        "request": ["", Validators.compose([Validators.required, URLValidator])],
        "helpdesk": ["", URLValidator],
        "userManual": ["", URLValidator],
        "trainingInformation": ["", URLValidator],
        "feedback": ["", URLValidator],
        "price": ["", Validators.compose([Validators.required, URLValidator])],
        "serviceLevelAgreement": ["", Validators.compose([Validators.required, URLValidator])],
        //TOS is defined in component
        "funding": [""]
    };
    providers: any = null;
    vocabularies: any = null;

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, protected router: Router) {
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                this.providers = suc;
                this.serviceForm.patchValue({});
            }
        );
        this.resourceService.getVocabularies().subscribe(suc => this.onVocabularies(suc), console.error);
    }

    onVocabularies(vocabularies) {
        let ret = {};
        Object.keys(vocabularies).forEach((e: any) => {
            let item = {};
            item[e] = vocabularies[e].name;
            let prefix = vocabularies[e].type;
            ret[prefix] = ret[prefix] || {};
            Object.assign(ret[prefix], item);
        });
        this.vocabularies = ret;
        this.serviceForm.patchValue({});
    }

    toServer(service: Service): Service {
        let ret = {};
        for (let fieldName in service) {
            let fieldValue = service[fieldName];
            let unPatchedValue = [];
            if (Array.isArray(fieldValue)) {
                for (let i = 0; i < fieldValue.length; i++) {
                    if (fieldValue[i].entry) {
                        unPatchedValue[i] = fieldValue[i].entry;
                    }
                }
            } else {
                unPatchedValue = fieldValue;
            }
            ret[fieldName] = unPatchedValue;
        }
        return <Service>ret;
    }

    onSubmit(service: Service, isValid: boolean) {
        //TODO: check if model is valid
        if (isValid) {
            this.resourceService.uploadService(this.toServer(service), this.editMode)
            .subscribe(service => {
                setTimeout(() => this.router.navigate(["/landingPage/service/" + btoa(service.id)]), 1000);
            });
        } else {
            window.scrollTo(0, 0);
            this.serviceForm.markAsDirty();
            this.serviceForm.updateValueAndValidity();
            this.errorMessage = "Please fill in all required fields (marked with an asterisk), and fix the data format in fields underlined with a red colour.";
        }
    }

    isDev() {
        return sessionStorage.getItem("dev") === "aye";
    }
}
