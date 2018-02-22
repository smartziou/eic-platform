/**
 * Created by stefania on 1/9/18.
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../../../services/authentication.service";
import { ResourceService } from "../../../services/resource.service";
import { UserService } from "../../../services/user.service";
import { NavigationService } from "../../../services/navigation.service";
import { URLParameter } from "../../../domain/url-parameter";
import { Service } from "../../../domain/eic-model";
import { SearchResults } from "../../../domain/search-results";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "service-dashboard",
    templateUrl: "./service-dashboard.component.html",
    styleUrls: ["./service-dashboard.component.css"]
})
export class ServiceDashboardComponent implements OnInit {

    public service: Service;
    public errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private router: NavigationService, private resourceService: ResourceService,
                private authenticationService: AuthenticationService, private userService: UserService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.resourceService.getService(id).subscribe(
                service => this.service = service,
                error => this.handleError(<any>error));
            let id = params["id"];
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving service (Server responded: ' + error + ')';
    }
}