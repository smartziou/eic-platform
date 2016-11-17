"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by stefania on 11/16/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var resource_service_1 = require("../../services/resource.service");
var landing_page_routing_1 = require("./landing-page.routing");
var component_landing_page_component_1 = require("./component/component-landing-page.component");
var corpus_landing_page_component_1 = require("./corpus/corpus-landing-page.component");
var metadata_header_info_component_1 = require("./resourceelements/metadata-header-info.component");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var version_info_component_1 = require("./resourceelements/version-info.component");
var contact_info_component_1 = require("./resourceelements/contact-info.component");
var validation_info_component_1 = require("./resourceelements/validation-info.component");
var usage_info_component_1 = require("./resourceelements/usage-info.component");
var resource_creation_info_component_1 = require("./resourceelements/resource-creation-info.component");
var component_distribution_info_component_1 = require("./resourceelements/component-distribution-info.component");
var rights_info_component_1 = require("./resourceelements/rights-info.component");
var license_info_component_1 = require("./resourceelements/license-info.component");
var processing_resource_info_component_1 = require("./resourceelements/processing-resource-info.component");
var component_dependencies_component_1 = require("./resourceelements/component-dependencies.component");
var resource_documentation_info_component_1 = require("./resourceelements/resource-documentation-info.component");
var component_evaluation_info_component_1 = require("./resourceelements/component-evaluation-info.component");
var component_documentation_info_component_1 = require("./resourceelements/component-documentation-info.component");
var component_creation_info_component_1 = require("./resourceelements/component-creation-info.component");
var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                landing_page_routing_1.landingPageRouting,
                ng2_bootstrap_1.TabsModule
            ],
            declarations: [
                component_landing_page_component_1.ComponentLandingPageComponent,
                corpus_landing_page_component_1.CorpusLandingPageComponent,
                metadata_header_info_component_1.MetadataHeaderInfoComponent,
                version_info_component_1.VersionInfoComponent,
                contact_info_component_1.ContactInfoComponent,
                validation_info_component_1.ValidationInfoComponent,
                usage_info_component_1.UsageInfoComponent,
                resource_creation_info_component_1.ResourceCreationInfoComponent,
                resource_documentation_info_component_1.ResourceDocumentationInfoComponent,
                component_distribution_info_component_1.ComponentDistributionInfoComponent,
                rights_info_component_1.RightsInfoComponent,
                license_info_component_1.LicenseInfoComponent,
                processing_resource_info_component_1.ProcessingResourceInfoComponent,
                component_dependencies_component_1.ComponentDependenciesComponent,
                component_evaluation_info_component_1.ComponentEvaluationInfoComponent,
                component_documentation_info_component_1.ComponentDocumentationInfoComponent,
                component_creation_info_component_1.ComponentCreationInfoComponent
            ],
            providers: [
                resource_service_1.ResourceService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageModule);
    return LandingPageModule;
}());
exports.LandingPageModule = LandingPageModule;
//# sourceMappingURL=landing-page.module.js.map