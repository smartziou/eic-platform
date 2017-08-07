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
import { KeysPipe } from "./services/key.pipe";

@NgModule({
    imports: [
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
        KeysPipe
    ],
    providers: [
        UserService,
        AuthenticationService,
        CanActivateViaAuthGuard,
        ResourceService,
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }