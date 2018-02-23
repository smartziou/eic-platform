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
    dashboardOn = false;

    provider: string;
    providerServices: Service[] = [];
    providerServicesGroupedByPlace: any;
    providerCoverage: string[];
    public errorMessage: string;

    constructor(public authenticationService: AuthenticationService, public userService: UserService,
                public resourceService: ResourceService, public router: NavigationService) {
        this.dashboardOn = userService.isDev();
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                for (let provider in suc) {
                    if (this.authenticationService.user.email === provider + "@eic") {
                        //eventually manager/provider/aai should provide the relevant info,
                        // but for now, we just check if user's email=provider+eic
                        this.provider = provider;
                        if (this.dashboardOn) {
                            return this.getServicesForProvider(provider);
                        } else {
                            return this.router.search({provider});
                        }
                    }
                }
            }
        );
    }

    getServicesForProvider(provider) {
        return this.resourceService.getServicesOfferedByProvider(provider)
        .subscribe(res => {
            this.providerServices = res;
            this.providerServicesGroupedByPlace = this.groupServicesOfProviderPerPlace(this.providerServices);
            this.providerCoverage = Object.keys(this.providerServicesGroupedByPlace);
        });
    }

    groupServicesOfProviderPerPlace(services: Service[]) {
        let ret = {};
        for (let service of services) {
            for (let place of service.places) {
                if (ret[place]) {
                    ret[place].push(this.providerServices);
                } else {
                    ret[place] = [];
                }
            }
        }
        return ret;
    }

    goToServiceDashboard(id: string) {
        return this.router.dashboard(id);
    }
}
