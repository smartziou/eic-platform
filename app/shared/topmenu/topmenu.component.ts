/**
 * Created by stefania on 7/5/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import {getCookie, deleteCookie} from "../../domain/utils";

@Component({
    selector: 'top-menu',
    templateUrl: './topmenu.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TopMenuComponent {

    private oidcUrl = process.env.OIDC_ENDPOINT;

    constructor(private oAuthService: AuthenticationService) {
    }

    name() {
        // let claims = this.oAuthService.getIdentityClaims();
        // if (!claims) return null;
        // return claims.given_name + ' ' + claims.family_name;
        let name = getCookie('name');
        return name ? decodeURI(name) : null;
    }

    logIn() {
        window.location.href = process.env.OIDC_ENDPOINT;
    }

    refresh() {
        // this.oAuthService.;
    }

    logout() {
        deleteCookie('name');
    }
}
