/**
 * Created by stefania on 11/24/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { ResourceService } from "../../../services/resource.service";
import { corpusRegistrationRouting } from "./corpus-registration.routing";
import { CorpusRegistrationComponent } from "./corpus-registration.component";
import { SearchForPublicationsComponent } from "./search-for-publications.component";
import { ContentConnectorService } from "../../../services/content-connector.service";
import { CorpusRegistrationFormComponent } from "./corpus-registration-form.component";
import { ResourceRegistrationModule } from "../resource-registration.module";
import { AccordionModule, TypeaheadModule } from "ng2-bootstrap/ng2-bootstrap";
import { CorpusTextPartInfoFormControl } from "../shared/corpus-text-part-info-form.component";
import { RawCorpusInfoFormControl } from "../shared/raw-corpus-info-form.component";
import { CorpusSubtypeSpecificInfoForm } from "../shared/corpus-subtype-specific-info-form.component";
import { CorpusUploadComponent } from "./corpus-upload.component";
import { CorpusBuilderComponent } from "./corpus-builder.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        corpusRegistrationRouting,
        AccordionModule,
        TypeaheadModule,
        ResourceRegistrationModule
    ],
    declarations: [
        CorpusUploadComponent,
        CorpusRegistrationComponent, 
        SearchForPublicationsComponent,
        CorpusRegistrationFormComponent,
        CorpusTextPartInfoFormControl,
        RawCorpusInfoFormControl,
        CorpusSubtypeSpecificInfoForm,
        CorpusBuilderComponent
    ],
    providers: [
        ResourceService, 
        ContentConnectorService
    ]
})

export class CorpusRegistrationModule {}