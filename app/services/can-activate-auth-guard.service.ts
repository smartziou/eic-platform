/**
 * Created by stefania on 8/31/16.
 */

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {NavigationService} from "./navigation.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: NavigationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let ret = this.authenticationService.isLoggedIn();
        if (!ret) {
            this.authenticationService.redirectURL = state.url;
            this.router.login();
        }
        return ret;
    }
}
