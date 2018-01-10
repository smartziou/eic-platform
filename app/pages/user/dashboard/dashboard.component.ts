/**
 * Created by pgl on 28/08/17.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {ResourceService} from "../../../services/resource.service";
import {UserService} from "../../../services/user.service";
import {NavigationService} from "../../../services/navigation.service";
import { URLParameter } from "../../../domain/url-parameter";
import { Service } from "../../../domain/eic-model";
import { SearchResults } from "../../../domain/search-results";

@Component({
    selector: "dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

    urlParameters: URLParameter[] = [];
    provider: string;
    providerServices: Service[] = [];

    public errorMessage: string;

    constructor(public authenticationService: AuthenticationService, protected userService: UserService,
                protected resourceService: ResourceService, private router: Router,
                protected navigationRouter: NavigationService) {
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                for (let provider in suc) {

                    if(provider === 'egi') {
                        console.log('Provider: ' + provider);
                        this.provider = provider;
                        this.getServicesForProvider(provider);
                    }

                    if (this.authenticationService.user.email === provider + "@eic") {
                        console.log('Provider: ' + provider);
                        this.provider = provider;
                        this.getServicesForProvider(provider);
                        // return this.router.search({provider});
                    }
                }
            }
        );
    }

    getServicesForProvider(provider) {

        let urlParameter: URLParameter = {
            key: 'provider',
            values: ['egi']
        };
        this.urlParameters.push(urlParameter);

        this.resourceService.search(this.urlParameters).subscribe(
            searchResults => this.showServicesForProvider(searchResults));
    }

    showServicesForProvider(searchResults: SearchResults) {

        for(let service of searchResults.results) {
            this.providerServices.push(service.resource);
        }


    }

    goToServiceDashboard(providerServiceId: string) {
        console.log("navigate to service dashboard");
        this.router.navigate(['/dashboard/', btoa(providerServiceId)]);
    }
}
