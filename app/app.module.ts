/**
 * Created by stefania on 10/3/16.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {OAuthModule} from "angular-oauth2-oidc";
import {StarRatingModule} from "angular-star-rating";
import {TabsModule} from "ngx-bootstrap";
import {AppComponent} from "./app.component";
import {appRoutingProviders, routing} from "./app.routing";
import {AboutModule} from "./pages/about/about.module";
import {BrowseCategoriesComponent} from "./pages/browsecategories/browse-categories.component";
import {CompareServicesComponent} from "./pages/compare/compare-services.component";
import {LanguagesComponent} from "./pages/eInfraServices/languages.component";
import {PlacesComponent} from "./pages/eInfraServices/places.component";
import {ProvidersComponent} from "./pages/eInfraServices/providers.component";
import {RelatedServicesComponent} from "./pages/eInfraServices/relatedServices.component";
import {RequiredServicesComponent} from "./pages/eInfraServices/requiredServices.component";
import {ServiceEditComponent} from "./pages/eInfraServices/service-edit.component";
import {ServiceFormComponent} from "./pages/eInfraServices/service-form.component";
import {ServiceUploadComponent} from "./pages/eInfraServices/service-upload.component";
import {TagsComponent} from "./pages/eInfraServices/tags.component";
import {TermsOfUseComponent} from "./pages/eInfraServices/termsOfUse.component";
import {HomeComponent} from "./pages/home/home.component";
import {LandingPageModule} from "./pages/landingpages/landing-page.module";
import {MyArray, MyArrayInline, MyArrayWrapper, MyInlineArrayWrapper} from "./pages/multiforms/my-array";
import {MyFormDirective} from "./pages/multiforms/my-form.directive";
import {InlineFormWrapper, MyGroup} from "./pages/multiforms/my-group.interface";
import {SearchComponent} from "./pages/search/search.component";
import {SupportModule} from "./pages/support/support.module";
import {ActivateComponent} from "./pages/user/activate/activate.component";
import {DashboardComponent} from "./pages/user/dashboard/dashboard.component";
import {UserModule} from "./pages/user/user.module";
import {AuthenticationService} from "./services/authentication.service";
import {CanActivateViaAuthGuard} from "./services/can-activate-auth-guard.service";
import {CanActivateViaPubGuard} from "./services/can-activate-pub-guard.service";
import {HTTPWrapper} from "./services/http-wrapper.service";
import {ResourceService} from "./services/resource.service";
import {UserService} from "./services/user.service";
import {ConfirmationDialogComponent} from "./shared/confirmation-dialog.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {ReusableComponentsModule} from "./shared/reusablecomponents/reusable-components.module";
import {SharedModule} from "./shared/shared.module";
import {TopMenuComponent} from "./shared/topmenu/topmenu.component";

// import {EinfraErrorHandler} from "./services/error-handler.service";
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
        ActivateComponent,
        DashboardComponent,
        MyGroup,
        ServiceFormComponent,
        ConfirmationDialogComponent,
        PlacesComponent,
        LanguagesComponent,
        RequiredServicesComponent,
        ProvidersComponent,
        RelatedServicesComponent,
        TagsComponent,
        TermsOfUseComponent,
        MyArrayWrapper,
        MyInlineArrayWrapper,
        InlineFormWrapper,
        MyArray,
        MyFormDirective,
        MyArrayInline
    ],
    entryComponents: [
        PlacesComponent,
        LanguagesComponent,
        ProvidersComponent,
        RequiredServicesComponent,
        RelatedServicesComponent,
        TagsComponent,
        TermsOfUseComponent,
        MyArrayWrapper,
        MyInlineArrayWrapper
    ],
    providers: [
        UserService,
        AuthenticationService,
        CanActivateViaAuthGuard,
        CanActivateViaPubGuard,
        ResourceService,
        appRoutingProviders,
        HTTPWrapper
        // {
        //     provide: ErrorHandler,
        //     useClass: EinfraErrorHandler
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}