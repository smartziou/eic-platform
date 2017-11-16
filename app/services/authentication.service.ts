/**
 * Created by stefania on 8/30/16.
 */
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../domain/eic-model";
import {deleteCookie, getCookie, setCookie} from "../domain/utils";

@Injectable()
export class AuthenticationService {
    redirectURL: string = "/dashboard";
    cookieName: string = "jwt";
    user: User = null;

    constructor(private router: Router) {
    }

    public login(user: User) {
        this.user = user;
        setCookie(this.cookieName, JSON.stringify(user), 1);
        this.router.navigate([this.redirectURL]);
    }

    public logout() {
        this.user = null;
        deleteCookie(this.cookieName);
        this.router.navigate(["/home"]);
    }

    public isLoggedIn(): boolean {
        return getCookie(this.cookieName) != null && this.user != null;
    }

    public getUserCookie(): string {
        return getCookie(this.cookieName);
    }
}
