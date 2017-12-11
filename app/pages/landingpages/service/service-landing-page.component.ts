import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../../domain/eic-model";
import {AuthenticationService} from "../../../services/authentication.service";
import {NavigationService} from "../../../services/navigation.service";
import {ResourceService} from "../../../services/resource.service";
import {UserService} from "../../../services/user.service";

declare var Highcharts;

@Component({
    selector: "service-landing-page",
    templateUrl: "./service-landing-page.component.html",
    styleUrls: ["../landing-page.component.css"]
})
export class ServiceLandingPageComponent implements OnInit, OnDestroy {
    services: Service[];
    public service: Service;
    public errorMessage: string;
    public EU: string[];
    private Math: Math;
    private sub: Subscription;
    private providers: any = {};

    constructor(private route: ActivatedRoute, private router: NavigationService, private resourceService: ResourceService,
                private authenticationService: AuthenticationService, private userService: UserService) {
        this.Math = Math;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = atob(params["id"]);
            Observable.zip(
                this.resourceService.getEU(),
                this.resourceService.getService(id),
                this.resourceService.getProviders(),
                this.resourceService.recordHit(id, "internal")
            ).subscribe(suc => {
                this.EU = suc[0];
                this.providers = suc[2];
                this.service = suc[1];
                let serviceIDs = (this.service.requiredServices || []).concat(this.service.relatedServices || [])
                .filter((e, i, a) => a.indexOf(e) === i);
                if (serviceIDs.length > 0) {
                    this.resourceService.getSelectedServices(serviceIDs)
                    .subscribe(services => this.services = services);
                }
            });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    runHighCharts() {
        let places = JSON.parse(JSON.stringify(this.service.places || []));
        let iEU = places.indexOf("EU");
        if (iEU > -1) {
            places.splice(iEU, 1);
            places.push(...this.EU);
        }
        Highcharts.mapChart("coverageMap", {
            chart: {borderWidth: 0},
            title: "",
            legend: {enabled: false},
            series: [
                {
                    name: "Country",
                    mapData: Highcharts.maps["custom/europe"],
                    data: places.map(e => e.toLowerCase()).map(e => [e, 1]),
                    dataLabels: {
                        enabled: true,
                        color: "#FFFFFF",
                        formatter: function () {
                            if (this.point.value) {
                                return this.point.name;
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: "",
                        pointFormat: "{point.name}"
                    }
                }
            ]
        });
        return "";
    }

    getShownRating() {
        //if user has rated, then show user rating
        //else show average rating
    }

    getPrettyService(id) {
        return (this.services || []).find(e => e.id == id) || {id, name: "Name not found!"};
    }

    visit() {
        this.resourceService.recordHit(this.service.id, "external").subscribe(console.log);
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