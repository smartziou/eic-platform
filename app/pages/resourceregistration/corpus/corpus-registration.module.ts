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

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        corpusRegistrationRouting
    ],
    declarations: [
        CorpusRegistrationComponent, 
        SearchForPublicationsComponent, 

    ],
    providers: [
        ResourceService, 
        ContentConnectorService
    ]
})

export class CorpusRegistrationModule {}