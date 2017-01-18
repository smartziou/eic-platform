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
import {RelatedCommonsForm, RelatedCommonForm} from "./shared/related-common-form.component";
import {LanguageTypeForm, LanguagesTypeForm} from "./shared/language-type-form.component";
import {IdentifierFormControl} from "./shared/identifier-common-form.component";
import {ResourceService} from "../../services/resource.service";
import {DatasetDistributionInfoFormControl} from "./shared/dataset-distribution-info-form.component";
import {MyStringFormControl} from "./shared/my-string-form.component";
import {IdentificationInfoFormControl} from "./shared/identification-info-form.component";
import {EnumCommonForm} from "./shared/enum-common-form";


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
        RelatedCommonsForm,
        RelatedCommonForm,
        LanguageTypeForm,
        LanguagesTypeForm,
        IdentifierFormControl,
        DatasetDistributionInfoFormControl,
        MyStringFormControl,
        IdentificationInfoFormControl,
        EnumCommonForm
    ],
    providers: [
        ResourceService
    ],
    exports: [
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        RelatedCommonsForm,
        RelatedCommonForm,
        LanguageTypeForm,
        LanguagesTypeForm,
        IdentifierFormControl,
        DatasetDistributionInfoFormControl,
        MyStringFormControl,
        IdentificationInfoFormControl,
        EnumCommonForm
    ]
})

export class ResourceRegistrationModule {}
