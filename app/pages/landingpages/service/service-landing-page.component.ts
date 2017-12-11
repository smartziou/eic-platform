import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../../domain/eic-model";
import {AuthenticationService} from "../../../services/authentication.service";
import {NavigationService} from "../../../services/navigation.service";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: "service-landing-page",
    templateUrl: "./service-landing-page.component.html",
    styleUrls: ["../landing-page.component.css"]
})
export class ServiceLandingPageComponent implements OnInit, OnDestroy {
    services: Service[];
    public service: Service;
    public errorMessage: string;
    private Math: Math;
    private sub: Subscription;
    private providers: any = {};

    constructor(private route: ActivatedRoute, private router: NavigationService, private resourceService: ResourceService,
                private authenticationService: AuthenticationService) {
        this.Math = Math;
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(providers =>this.providers = providers);
        this.sub = this.route.params.subscribe(params => {
            let id = atob(params["id"]);
            this.resourceService.recordHit(id, "internal");
            this.resourceService.getService(id).subscribe(service => {
                this.service = service;
                let serviceIDs =
                    (service.requiredServices || [])
                    .concat(service.relatedServices || [])
                    .filter((e, i, a) => a.indexOf(e) === i);
                if (serviceIDs.length > 0) {
                    this.resourceService.getSelectedServices(serviceIDs).subscribe(services => this.services = services);
                }
            });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getPrettyService(id) {
        return this.services.find(e => e.id == id) || {id, name: "Name not found!"};
    }

    visit() {
        this.resourceService.recordHit(this.service.id, "external");
    }

    handleError(error) {
        this.errorMessage = "System error loading service (Server responded: " + error + ")";
    }

    getDeterminedInt(id) {
        let parts = id.split(".");
        let num = 100 * parseInt(parts[0]) + parseInt(parts[1]);
        return Math.floor(1371 + Math.abs(Math.sin(num) * 100000));
    }
}