/**
 * Created by stefania on 10/3/16.
 */

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { OAuthModule } from "angular-oauth2-oidc";
import { StarRatingModule } from "angular-star-rating";
import { MyDatePickerModule } from "mydatepicker";
import { CKEditorModule } from "ng2-ckeditor";
import { TabsModule } from "ngx-bootstrap";
import { AppComponent } from "./app.component";
import { appRoutingProviders, routing } from "./app.routing";
import { AccordionComponent } from "./pages/eInfraServices/accordion-section.component";
import { LanguagesComponent } from "./pages/eInfraServices/multivalue-components/languages.component";
import { PlacesComponent } from "./pages/eInfraServices/multivalue-components/places.component";
import { ProvidersComponent } from "./pages/eInfraServices/multivalue-components/providers.component";
import { RelatedServicesComponent } from "./pages/eInfraServices/multivalue-components/relatedServices.component";
import { RequiredServicesComponent } from "./pages/eInfraServices/multivalue-components/requiredServices.component";
import { TagsComponent } from "./pages/eInfraServices/multivalue-components/tags.component";
import { TermsOfUseComponent } from "./pages/eInfraServices/multivalue-components/termsOfUse.component";
import { ServiceEditComponent } from "./pages/eInfraServices/service-edit.component";
import { ServiceFormComponent } from "./pages/eInfraServices/service-form.component";
import { ServiceUploadComponent } from "./pages/eInfraServices/service-upload.component";
import { HomeComponent } from "./pages/home/home.component";
import { MyArray, MyArrayInline, MyArrayWrapper, MyInlineArrayWrapper } from "./pages/multiforms/my-array";
import { MyFormDirective } from "./pages/multiforms/my-form.directive";
import { InlineFormWrapper, MyGroup } from "./pages/multiforms/my-group.interface";
import { SearchComponent } from "./pages/search/search.component";
import { DashboardComponent } from "./pages/user/dashboard/dashboard.component";
import { ServiceDashboardComponent } from "./pages/user/dashboard/service-dashboard.component";
import { UserModule } from "./pages/user/user.module";
import { AuthenticationService } from "./services/authentication.service";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";
import { CanActivateViaPubGuard } from "./services/can-activate-pub-guard.service";
import { ComparisonService } from "./services/comparison.service";
import { HTTPWrapper } from "./services/http-wrapper.service";
import { NavigationService } from "./services/navigation.service";
import { ResourceService } from "./services/resource.service";
import { UserService } from "./services/user.service";
import { ConfirmationDialogComponent } from "./shared/confirmation-dialog.component";
import { FeedbackComponent } from "./shared/feedback/feedback.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ReusableComponentsModule } from "./shared/reusablecomponents/reusable-components.module";
import { SharedModule } from "./shared/shared.module";
import { TopMenuComponent } from "./shared/topmenu/topmenu.component";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartModule } from "angular2-highcharts";
import { ServiceLandingPageComponent } from "./pages/landingpages/service/service-landing-page.component";
import {DatePipe} from "@angular/common";

const eicForms = [
    ProvidersComponent, PlacesComponent, LanguagesComponent, TagsComponent,
    RequiredServicesComponent, RelatedServicesComponent, TermsOfUseComponent
];

declare var require: any;

export function highchartsFactory() {
    const hc = require('highcharts');
    require('highcharts/modules/heatmap')(hc);
    require('highcharts/modules/map')(hc);
    require('../js/europe.js')(hc);
    require('highcharts/modules/drilldown')(hc);
    require('highcharts/modules/exporting')(hc);
    require('highcharts/modules/offline-exporting')(hc);
    require('highcharts/modules/export-data')(hc);
    return hc;
}

@NgModule({
    imports: [
        BrowserModule,
        MyDatePickerModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        OAuthModule.forRoot(),
        ReactiveFormsModule,
        //ResourceRegistrationModule,
        ReusableComponentsModule,
        routing,
        SharedModule,
        StarRatingModule.forRoot(),
        TabsModule,
        UserModule,
        CKEditorModule,
        ChartModule
    ],
    declarations: [
        //MAIN
        AppComponent,
        HomeComponent,
        SearchComponent,
        ServiceLandingPageComponent,
        //PERSISTENT
        ConfirmationDialogComponent,
        FeedbackComponent,
        FooterComponent,
        TopMenuComponent,
        //USER
        DashboardComponent,
        ServiceDashboardComponent,
        //FORMS
        ServiceEditComponent,
        ServiceFormComponent,
        ServiceUploadComponent,
        AccordionComponent,
        //FORMS SUPPORT
        MyArray,
        MyArrayInline,
        MyArrayWrapper,
        MyInlineArrayWrapper,
        InlineFormWrapper,
        MyFormDirective,
        MyGroup,
        //FORMS TYPES
        ...eicForms
    ],
    entryComponents: [
        MyArrayWrapper,
        MyInlineArrayWrapper,
        ...eicForms
    ],
    providers: [
        appRoutingProviders,
        AuthenticationService,
        ComparisonService,
        CanActivateViaAuthGuard,
        CanActivateViaPubGuard,
        HTTPWrapper,
        NavigationService,
        ResourceService,
        UserService,
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        },
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
