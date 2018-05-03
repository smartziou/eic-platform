/**
 * Created by stefania on 10/3/16.
 */

import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";
import { User } from "./domain/eic-model";
import { UserService } from "./services/user.service";

@Component({
    selector: "einfracentral-platform",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    isLoginOrRegister: boolean = false;
    public submitted: boolean;

    constructor(public router: Router, public oauthService: AuthenticationService, public userService: UserService) {
        // // URL of the SPA to redirect the user to after login
        // this.oauthService.redirectUri = window.location.origin + "/home";
        //
        // // The SPA's id. The SPA is registerd with this id at the auth-server
        // this.oauthService.clientId = "dfd9f71e-2d7e-41a7-a9c5-bc27cc815868";
        //
        // // set the scope for the permissions the client should request
        // // The first three are defined by OIDC. The 4th is a usecase-specific one
        // this.oauthService.scope = "openid";
        //
        // // The name of the auth-server that has to be mentioned within the token
        // this.oauthService.loginUrl = "https://aai.openminted.eu/oidc/authorize";
        //
        // this.oauthService.tryLogin();
    }

    ngOnInit() {

        this.router.events.subscribe((evt: any) => {
            this.isLoginOrRegister = ["/signUp", "/signIn"].includes(evt.url);
        });
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
