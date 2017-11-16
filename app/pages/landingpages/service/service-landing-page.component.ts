import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../../domain/eic-model";
import {AuthenticationService} from "../../../services/authentication.service";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: "service-landing-page",
    templateUrl: "./service-landing-page.component.html",
    styleUrls: ["../landing-page.component.css"]
})

export class ServiceLandingPageComponent implements OnInit {
    public service: Service;
    public errorMessage: string;
    private Math: Math;
    private sub: Subscription;
    private providers: any = {};

    constructor(private route: ActivatedRoute, private router: Router, private resourceService: ResourceService, private authenticationService: AuthenticationService) {
        this.Math = Math;
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(suc => this.providers = suc);
        this.sub = this.route.params.subscribe(params => {
            let id = atob(params["id"]);
            this.resourceService.recordHit(id, "internal");
            this.resourceService.getService(id).subscribe(service => this.service = service);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    handleError(error) {
        this.errorMessage = "System error loading service (Server responded: " + error + ")";
    }

    getEncodedID() {
        return btoa(this.service.id);
    }

    getDeterminedInt(id) {
        let parts = id.split(".");
        let num = 100 * parseInt(parts[0]) + parseInt(parts[1]);
        return Math.floor(1371 + Math.abs(Math.sin(num) * 100000));
    }

    rateService() {
        if (this.authenticationService.isLoggedIn()) {
            //Rate logic goes here
        } else {
            this.router.navigate(["/signIn"]);
        }
    }
}