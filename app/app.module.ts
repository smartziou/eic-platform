/**
 * Created by stefania on 10/3/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from "./app.routing";

import { UserService } from "./services/user.service";
import { AuthenticationService } from "./services/authentication.service";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";
import { ResourceService } from "./services/resource.service";

import { AppComponent } from "./app.component";
import { TopMenuComponent } from "./shared/topmenu/topmenu.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { SupportComponent } from "./pages/support/support.component";
import { CorpusLandingPageComponent } from "./pages/landingpages/corpus/corpus-landing-page.component";
import { ComponentLandingPageComponent } from "./pages/landingpages/component/component-landing-page.component";
import { LoginComponent } from "./pages/user/signin/login.component";
import { RegisterComponent } from "./pages/user/register/register.component";
import { EditProfileComponent } from "./pages/user/editprofile/edit-profile.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        // ResourceRegistrationModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SupportComponent,
        LoginComponent,
        RegisterComponent,
        EditProfileComponent,
        SearchComponent,
        TopMenuComponent,
        ComponentLandingPageComponent,
        CorpusLandingPageComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        CanActivateViaAuthGuard,
        ResourceService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }