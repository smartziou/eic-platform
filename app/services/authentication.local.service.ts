/**
 * Created by pgl on 14/09/17.
 */

import {Injectable} from "@angular/core";
import {deleteCookie, getCookie} from "../domain/utils";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Injectable()
export class AuthenticationLocalService {

    private endpoint = process.env.API_ENDPOINT;

    constructor(private http: Http, private router: Router) {
    }

    logout() {
        deleteCookie("jwt");
        this.router.navigate(['/home']);
    }


    public getUser(): string {
        return getCookie('jwt');
    }

    public loggedIn(): boolean {
        return true;
        //return this.getUser() != null;
    }
}