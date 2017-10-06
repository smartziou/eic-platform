/**
 * Created by stefania on 8/31/16.
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationLocalService} from "./authentication.local.service";


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authenticationLocalService: AuthenticationLocalService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authenticationLocalService.loggedIn()) {
            return true;
        }

        // Store the attempted URL for redirecting
        //this.authenticationService.redirectUrl = state.url;

        // Navigate to the login page
        this.router.navigate(['/signIn']);
        return false;
    }
}