/**
 * Created by pgl on 28/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {Service} from "../../../domain/eic-model";
import {AuthenticationService} from "../../../services/authentication.service";
import {NavigationService} from "../../../services/navigation.service";
import {ResourceService} from "../../../services/resource.service";
import {UserService} from "../../../services/user.service";

@Component({
    selector: "dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

    provider: string;
    providerServices: Service[] = [];
    public errorMessage: string;

    constructor(public authenticationService: AuthenticationService, protected userService: UserService,
                protected resourceService: ResourceService, protected router: NavigationService) {

    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                for (let provider in suc) {
                    if (this.authenticationService.user.email === provider + "@eic") {
                        //eventually manager/provider/aai should provide the relevant info,
                        // but for now, we just check if user's email=provider+eic
                        this.provider = provider;
                            return this.getServicesForProvider(provider);
                            return this.router.search({provider});
                    }
                }
            }
        );
    }

    getServicesForProvider(provider) {
        return this.resourceService.getServicesOfferedByProvider(provider)
        .subscribe(res => this.providerServices = Object.values(res).map(e => e.resource));
    }

    goToServiceDashboard(id: string) {
        return this.router.dashboard(id);
    }
}
