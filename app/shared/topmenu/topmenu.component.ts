/**
 * Created by stefania on 7/5/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
    selector: 'top-menu',
    templateUrl: 'app/shared/topmenu/topmenu.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TopMenuComponent {

    constructor(private authenticationService: AuthenticationService) {
    }

    loggedIn() {
        return this.authenticationService.isUserLoggedIn();
    }

    logout() {
        this.authenticationService.logout();
    }
}