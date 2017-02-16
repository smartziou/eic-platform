/**
 * Created by stefania on 7/5/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    selector: 'top-menu',
    templateUrl: 'app/shared/topmenu/topmenu.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TopMenuComponent {

    constructor(private oAuthService: OAuthService) {
    }

    name() {
        let claims = this.oAuthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name + ' ' + claims.family_name;
    }

    logIn() {
        this.oAuthService.initImplicitFlow();
    }

    logout() {
        this.oAuthService.logOut();
    }
}