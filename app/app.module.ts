/**
 * Created by stefania on 10/3/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.routing";

import { UserService } from "./services/user.service";
import { AuthenticationService } from "./services/authentication.service";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";
import { ResourceService } from "./services/resource.service";

import { AppComponent } from "./app.component";
import { TopMenuComponent } from "./shared/topmenu/topmenu.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { TabsModule } from "ngx-bootstrap";
import { LandingPageModule } from "./pages/landingpages/landing-page.module";
import { FooterComponent } from "./shared/footer/footer.component";
import { OAuthModule } from 'angular-oauth2-oidc';
import { ReusableComponentsModule } from "./shared/reusablecomponents/reusable-components.module";
import { SupportModule } from "./pages/support/support.module";
import { AboutModule } from "./pages/about/about.module";
import { StarRatingModule } from 'angular-star-rating';
import { UserModule } from "./pages/user/user.module";
import { CompareServicesComponent } from "./pages/compare/compare-services.component";
import { BrowseCategoriesComponent } from "./pages/browsecategories/browse-categories.component";
import {SharedModule} from "./shared/shared.module";
import {ServiceUploadComponent} from "./pages/eInfraServices/service-upload.component";
import {ServiceEditComponent} from "./pages/eInfraServices/service-edit.component";
import {DashboardComponent} from "./pages/user/dashboard/dashboard.component";
import {CountriesComponent} from "./pages/eInfraServices/countries.component";
import {MyArray, MyArrayInline, MyArrayWrapper, MyInlineArrayWrapper} from "./pages/multiforms/my-array";
import {InlineFormWrapper, MyGroup} from "./pages/multiforms/my-group.interface";
import {MyFormDirective} from "./pages/multiforms/my-form.directive";
import {LanguagesComponent} from "./pages/eInfraServices/languages.component";
// import {RegionsComponent} from "./pages/eInfraServices/regions.component";
import {TermsOfUseComponent} from "./pages/eInfraServices/termsOfUse.component";
import {RelatedServicesComponent} from "./pages/eInfraServices/relatedServices.component";
import {TagsComponent} from "./pages/eInfraServices/tags.component";
import {AuthenticationLocalService} from "./services/authentication.local.service";
import {ServiceFormComponent} from "./pages/eInfraServices/service-form.component";
import {MyWrapper} from "./pages/multiforms/my-wrapper.interface";
import {ConfirmationDialogComponent} from "./shared/confirmation-dialog.component";

@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        // ResourceRegistrationModule,
        routing,
        LandingPageModule, 
        TabsModule,
        OAuthModule.forRoot(),
        ReusableComponentsModule,
        SupportModule,
        AboutModule,
        UserModule,
        StarRatingModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        CompareServicesComponent,
        TopMenuComponent,
        FooterComponent,
        BrowseCategoriesComponent,
        ServiceUploadComponent,
        ServiceEditComponent,
        DashboardComponent,
        MyGroup,
        ServiceFormComponent,
        ConfirmationDialogComponent,
        CountriesComponent,
        LanguagesComponent,
        // RegionsComponent,
        RelatedServicesComponent,
        TagsComponent,
        TermsOfUseComponent,
        MyArrayWrapper,
        MyInlineArrayWrapper,
        InlineFormWrapper,
        MyArray,
        MyFormDirective,
        MyArrayInline,
    ],
    entryComponents: [
        CountriesComponent,
        LanguagesComponent,
        // RegionsComponent,
        RelatedServicesComponent,
        TagsComponent,
        TermsOfUseComponent,
        MyArrayWrapper,
        MyInlineArrayWrapper,
    ],
    providers: [
        UserService,
        AuthenticationService,
        CanActivateViaAuthGuard,
        ResourceService,
        appRoutingProviders,
        AuthenticationLocalService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }