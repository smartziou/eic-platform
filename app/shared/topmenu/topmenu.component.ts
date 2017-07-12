/**
 * Created by stefania on 7/5/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import {getCookie, deleteCookie} from "../../domain/utils";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'top-menu',
    templateUrl: './topmenu.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TopMenuComponent {

    private oidcUrl = process.env.OIDC_ENDPOINT;

    constructor(private oAuthService: AuthenticationService,private route: ActivatedRoute,private router: Router) {
    }

    private loginWithState() {
        console.log(this.route);
        sessionStorage.setItem("state.location",this.router.url);
        window.location.href =this.oidcUrl;
    }

    onClick(id: string) {
        var el: HTMLElement = document.getElementById(id);
        el.classList.remove('uk-open');
    }
    private logout() {
        this.oAuthService.logout();
    }

}
