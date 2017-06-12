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

    onClick(id: string) {
        var el: HTMLElement = document.getElementById(id);
        el.classList.remove('uk-open');
    }
    private logout() {
        this.oAuthService.logout();
    }

}
