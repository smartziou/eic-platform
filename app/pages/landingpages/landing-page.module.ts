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
import { TabsModule } from "ng2-bootstrap";
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
import { DatasetDistributionInfoComponent } from "./resourceelements/dataset-distribution-info.component";
import { AnnotationInfoComponent } from "./resourceelements/annotation-info.component";
import { CorpusTextPartInfoComponent } from "./resourceelements/corpus-text-part-info.component";
import { AnnotatedCorpusInfoComponent } from "./resourceelements/annotated-corpus-info.component";
import { RawCorpusInfoComponent } from "./resourceelements/raw-corpus-info.component";
import { AnnotationsInfoComponent } from "./resourceelements/annotations-info.component";
import { LanguageDescriptionLandingPageComponent } from "./languagedescription/language-description-landing-page.component";
import { LexicalConceptualLandingPageComponent } from "./lexicalconceptual/lexical-conceptual-landing-page.component";
import { ModelLandingPageComponent } from "./model/model-landing-page.component";

@NgModule({
    imports: [
        CommonModule,
        landingPageRouting,
        TabsModule
    ],
    declarations: [
        ComponentLandingPageComponent,
        CorpusLandingPageComponent,
        LanguageDescriptionLandingPageComponent,
        LexicalConceptualLandingPageComponent,
        ModelLandingPageComponent,
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
        ComponentCreationInfoComponent, 
        DatasetDistributionInfoComponent,
        AnnotationInfoComponent,
        CorpusTextPartInfoComponent, 
        AnnotatedCorpusInfoComponent, 
        RawCorpusInfoComponent,
        AnnotationsInfoComponent
    ],
    providers: [
        ResourceService
    ]
})

export class LandingPageModule {}