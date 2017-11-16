/**
 * Created by pgl on 28/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {ResourceService} from "../../../services/resource.service";
import {UserService} from "../../../services/user.service";

@Component({
    selector: "dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
    constructor(protected authenticationService: AuthenticationService, protected userService: UserService,
                protected resourceService: ResourceService, protected router: Router) {
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                for (let provider in suc) {
                    if (this.userService.user.email === provider + "@eic") {
                        this.router.navigate(["/search", {provider: provider}]);
                        break;
                    }
                }
            }
        );
    }
}
