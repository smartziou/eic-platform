/**
 * Created by stefania on 10/5/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import { ResourceService } from "../../../services/resource.service";
import { componentRegistrationRouting } from "./component-registration.routing";
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationFormComponent } from "./component-registration-form.component";
import {MetadataIdentifierFormControl} from "../shared/metadata-identifier-form.component";
import {MetadataHeaderInfoFormControl} from "../shared/metadata-header-info-form.component";
import {ValuesPipe} from "../shared/omtd.enum";
import {RelatedPersonsForm, RelatedPersonForm} from "../shared/related-persons-form.component";
import {IdentifierFormControl} from "../shared/identifier-common-form.component";
import {LanguageTypeForm, LanguagesTypeForm} from "../shared/language-type-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        componentRegistrationRouting,
    ],
    declarations: [
        ComponentRegistrationComponent,
        ComponentRegistrationXMLComponent, 
        ComponentRegistrationFormComponent,
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        RelatedPersonsForm,
        RelatedPersonForm,
        LanguageTypeForm,
        LanguagesTypeForm,
        IdentifierFormControl
    ],
    providers: [
        ResourceService
    ]
})

export class ComponentRegistrationModule {}