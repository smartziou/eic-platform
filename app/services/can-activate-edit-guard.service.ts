/**
 * Created by pgl on 11/12/17.
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class CanActivateEditGuard implements CanActivate {
    constructor(private userService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
        //return this.userService.canEditService(TODO: Find a smart way of doing this);
    }
}
