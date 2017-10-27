/**
 * Created by stefania on 8/31/16.
 */

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let ret = this.authenticationService.isLoggedIn();
        if (!ret) {
            this.authenticationService.redirectUrl = state.url;
            this.router.navigate(['/signIn']);
        }
        return ret;
    }
}
