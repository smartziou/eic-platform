/**
 * Created by stefanos on 16/1/2017.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {AccordionModule, TypeaheadModule} from "ng2-bootstrap/ng2-bootstrap";
import {MetadataIdentifierFormControl} from "./shared/metadata-identifier-form.component";
import {MetadataHeaderInfoFormControl} from "./shared/metadata-header-info-form.component";
import {ValuesPipe} from "./shared/values-pipe";
import {RelatedPersonsForm, RelatedPersonForm} from "./shared/related-persons-form.component";
import {LanguageTypeForm, LanguagesTypeForm} from "./shared/language-type-form.component";
import {IdentifierFormControl} from "./shared/identifier-common-form.component";
import {ResourceService} from "../../services/resource.service";
import {DatasetDistributionInfoFormControl} from "./shared/dataset-distribution-info-form.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        TypeaheadModule
    ],
    declarations: [
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        RelatedPersonsForm,
        RelatedPersonForm,
        LanguageTypeForm,
        LanguagesTypeForm,
        IdentifierFormControl,
        DatasetDistributionInfoFormControl
    ],
    providers: [
        ResourceService
    ],
    exports: [
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        RelatedPersonsForm,
        RelatedPersonForm,
        LanguageTypeForm,
        LanguagesTypeForm,
        IdentifierFormControl,
        DatasetDistributionInfoFormControl
    ]
})

export class ResourceRegistrationModule {}