/**
 * Created by pgl on 27/11/17.
 */

import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavigationService {
    constructor(private router: Router) {
    }

    service(id: string) {
        return this.router.navigate(["/service", btoa(id)]);
    }

    dashboard(id: string) {
        return this.router.navigate(["/dashboard", btoa(id)]);
    }

    edit(id: string) {
        return this.router.navigate(["/edit", btoa(id)]);
    }

    search(any: any) {
        return this.router.navigate(["/search", any]);
    }

    login() {
        return this.router.navigate(["/signIn"]);
    }

    home() {
        return this.router.navigate(["/home"]);
    }

    compare(any: any) {
        return this.router.navigate(["/compare", any]);
    }

    go(url: string) {
        return this.router.navigate([url]);
    }
}
