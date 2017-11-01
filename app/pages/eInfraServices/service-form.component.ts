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
// import {RegionsComponent} from "./regions.component";
import {RelatedServicesComponent} from "./relatedServices.component";
import {TagsComponent} from "./tags.component";
import {TermsOfUseComponent} from "./termsOfUse.component";
import {Router} from "@angular/router";

@Component({
    selector: 'service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.css'],
})

export class ServiceFormComponent implements OnInit {

    editMode: boolean;
    serviceForm: FormGroup;
    service: Service;
    errorMessage: string = null;
    successMessage: string = null;
    submitted = false;
    readonly placesDesc: sd.Description = sd.placesDesc;
    // readonly regionsDesc: sd.Description = sd.regionsDesc;
    readonly languagesDesc: sd.Description = sd.languagesDesc;
    readonly tagsDesc: sd.Description = sd.tagsDesc;
    readonly relatedServicesDesc: sd.Description = sd.relatedServicesDesc;
    readonly termsOfUseDesc: sd.Description = sd.termsOfUseDesc;
    readonly nameDesc: sd.Description = sd.nameDesc;
    readonly fullNameDesc: sd.Description = sd.fullNameDesc;
    readonly descriptionDesc: sd.Description = sd.descriptionDesc;
    readonly optionsDesc: sd.Description = sd.optionsDesc;
    readonly targetUsersDesc: sd.Description = sd.targetUsersDesc;
    readonly userValueDesc: sd.Description = sd.userValueDesc;
    readonly userBaseDesc: sd.Description = sd.userBaseDesc;
    readonly providerDesc: sd.Description = sd.providerDesc;
    readonly fundingDesc: sd.Description = sd.fundingDesc;
    readonly urlDesc: sd.Description = sd.urlDesc;
    readonly symbolDesc: sd.Description = sd.symbolDesc;
    readonly multimediaURLDesc: sd.Description = sd.multimediaURLDesc;
    readonly versionDesc: sd.Description = sd.versionDesc;
    readonly lastUpdateDesc: sd.Description = sd.lastUpdateDesc;
    readonly changeLogDesc: sd.Description = sd.changeLogDesc;
    readonly lifeCycleStatusDesc: sd.Description = sd.lifeCycleStatusDesc;
    readonly trlDesc: sd.Description = sd.trlDesc;
    readonly categoryDesc: sd.Description = sd.categoryDesc;
    readonly subcategoryDesc: sd.Description = sd.subcategoryDesc;
    readonly requestDesc: sd.Description = sd.requestDesc;
    readonly helpdeskDesc: sd.Description = sd.helpdeskDesc;
    readonly userManualDesc: sd.Description = sd.userManualDesc;
    readonly trainingInformationDesc: sd.Description = sd.trainingInformationDesc;
    readonly feedbackDesc: sd.Description = sd.feedbackDesc;
    readonly priceDesc: sd.Description = sd.priceDesc;
    readonly serviceLevelAgreementDesc: sd.Description = sd.serviceLevelAgreementDesc;
    countriesComponent: Type<CountriesComponent> = CountriesComponent;
    languagesComponent: Type<LanguagesComponent> = LanguagesComponent;
    // regionsComponent: Type<RegionsComponent> = RegionsComponent;
    relatedServicesComponent: Type<RelatedServicesComponent> = RelatedServicesComponent;
    tagsComponent: Type<TagsComponent> = TagsComponent;
    termsOfUseComponent: Type<TermsOfUseComponent> = TermsOfUseComponent;
    formGroupMeta = {
        "url": ["", Validators.compose([Validators.required, URLValidator])],
        "name": ["", Validators.required],
        "tagline": [""],
        "fullName": [""],
        "description": ["", Validators.required],
        "options": [""],
        "targetUsers": [""],
        "userValue": [""],
        "userBase": [""],
        "symbol": ["", URLValidator],
        "multimediaURL": ["", URLValidator],
        "providers": ["", Validators.required],
        "version": [""],
        "lastUpdate": [""],
        "changeLog": [""],
        "lifeCycleStatus": ["", Validators.compose([Validators.required, PhaseValidator])],
        "trl": ["", Validators.compose([Validators.required, TLRValidator])],
        "category": ["", Validators.required],
        "subcategory": ["", Validators.required],
        "request": ["", Validators.compose([Validators.required, URLValidator])],
        "helpdesk": ["", URLValidator],
        "userManual": ["", URLValidator],
        "trainingInformation": ["", URLValidator],
        "feedback": ["", URLValidator],
        "price": ["", Validators.compose([Validators.required, URLValidator])],
        "serviceLevelAgreement": ["", Validators.compose([Validators.required, URLValidator])],
        "funding": [""]
    };
    providers: any = null;
    vocabularies: any = null;

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
        Object.keys(vocabularies).forEach(e => {
            let item = {};
            item[e] = vocabularies[e];
            let prefix = e.split("_")[0];
            ret[prefix] = ret[prefix] || {};
            Object.assign(ret[prefix], item);
        });
        this.vocabularies = ret;
        this.serviceForm.patchValue({});
    }

    constructor(protected resourceService: ResourceService, protected fb: FormBuilder, protected router: Router) {
        this.serviceForm = this.fb.group(this.formGroupMeta);
    }

    onSubmit(service: Service, isValid: boolean) {
        //TODO: check if model is valid
        if (isValid) {
            let fixedObject: any = {};
            for (let i in service) {
                if (Array.isArray(service[i])) {
                    fixedObject[i] = new Array();
                    for (let j = 0; j < service[i].length; j++) {
                        if (service[i][j].entry) {
                            fixedObject[i].push(service[i][j].entry);
                        }

                    }
                }
            }
            this.resourceService.uploadService(Object.assign({}, service, fixedObject), this.editMode)
                .subscribe(service => {
                    setTimeout(() => this.router.navigate(['/landingPage/service/' + btoa(service.id)]), 1000);
                });
        } else {
            console.log('Model is invalid');
            window.scrollTo(0, 0);
            this.serviceForm.markAsDirty();
            this.serviceForm.updateValueAndValidity();
            this.errorMessage = 'Form not valid';
        }
    }

    isDev() {
        return sessionStorage.getItem('dev') === 'aye'
    }

}
