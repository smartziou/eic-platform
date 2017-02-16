/**
 * Created by stefania on 10/3/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    selector: 'openminted-platform',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    constructor(private router: Router,private oauthService: OAuthService) {
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/home";

        // The SPA's id. The SPA is registerd with this id at the auth-server
        this.oauthService.clientId = "178182196328-e805b2t9rte23t7ikigqsuunjclh86ps.apps.googleusercontent.com";

        // set the scope for the permissions the client should request
        // The first three are defined by OIDC. The 4th is a usecase-specific one
        this.oauthService.scope = "openid profile email";

        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;

        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = "https://accounts.google.com";

        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument().then(() => {

            // This method just tries to parse the token(s) within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't send the user the the login page
            this.oauthService.tryLogin({});

        });
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0,0);
        });
    }
}