/**
 * Created by stefania on 7/5/16.
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "top-menu",
    templateUrl: "./topmenu.component.html",
    styles: [`
        .uk-navbar-nav > li > a.loginLink {
            color: #214c9c;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class TopMenuComponent {
    constructor(public authenticationService: AuthenticationService, public route: Router) {
    }

    get isHome() {
        return this.route.url == '/home';
    }

    onClick(id: string) {
        var el: HTMLElement = document.getElementById(id);
        el.classList.remove("uk-open");
    }
}