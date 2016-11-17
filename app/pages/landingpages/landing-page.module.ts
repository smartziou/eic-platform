/**
 * Created by stefania on 11/16/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ResourceService } from "../../services/resource.service";
import { landingPageRouting } from "./landing-page.routing";
import { ComponentLandingPageComponent } from "./component/component-landing-page.component";
import { CorpusLandingPageComponent } from "./corpus/corpus-landing-page.component";
import { MetadataHeaderInfoComponent } from "./resourceelements/metadata-header-info.component";
import { TabsModule } from "ng2-bootstrap/ng2-bootstrap";
import { VersionInfoComponent } from "./resourceelements/version-info.component";
import { ContactInfoComponent } from "./resourceelements/contact-info.component";
import { ValidationInfoComponent } from "./resourceelements/validation-info.component";
import { UsageInfoComponent } from "./resourceelements/usage-info.component";
import { ResourceCreationInfoComponent } from "./resourceelements/resource-creation-info.component";
import { ComponentDistributionInfoComponent } from "./resourceelements/component-distribution-info.component";
import { RightsInfoComponent } from "./resourceelements/rights-info.component";
import { LicenseInfoComponent } from "./resourceelements/license-info.component";
import { ProcessingResourceInfoComponent } from "./resourceelements/processing-resource-info.component";
import { ComponentDependenciesComponent } from "./resourceelements/component-dependencies.component";
import { ResourceDocumentationInfoComponent } from "./resourceelements/resource-documentation-info.component";
import { ComponentEvaluationInfoComponent } from "./resourceelements/component-evaluation-info.component";
import { ComponentDocumentationInfoComponent } from "./resourceelements/component-documentation-info.component";
import { ComponentCreationInfoComponent } from "./resourceelements/component-creation-info.component";

@NgModule({
    imports: [
        CommonModule,
        landingPageRouting,
        TabsModule
    ],
    declarations: [
        ComponentLandingPageComponent,
        CorpusLandingPageComponent,
        MetadataHeaderInfoComponent, 
        VersionInfoComponent, 
        ContactInfoComponent, 
        ValidationInfoComponent,
        UsageInfoComponent, 
        ResourceCreationInfoComponent, 
        ResourceDocumentationInfoComponent, 
        ComponentDistributionInfoComponent, 
        RightsInfoComponent,
        LicenseInfoComponent, 
        ProcessingResourceInfoComponent, 
        ComponentDependenciesComponent, 
        ComponentEvaluationInfoComponent, 
        ComponentDocumentationInfoComponent,
        ComponentCreationInfoComponent
    ],
    providers: [
        ResourceService
    ]
})

export class LandingPageModule {}