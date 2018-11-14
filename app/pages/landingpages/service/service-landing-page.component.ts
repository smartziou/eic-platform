import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Provider, RichService, Service } from "../../../domain/eic-model";
import { AuthenticationService } from "../../../services/authentication.service";
import { NavigationService } from "../../../services/navigation.service";
import { ResourceService } from "../../../services/resource.service";
import { UserService } from "../../../services/user.service";

declare var require: any;

@Component({
    selector: "service-landing-page",
    templateUrl: "./service-landing-page.component.html",
    styleUrls: ["../landing-page.component.css"]
})
export class ServiceLandingPageComponent implements OnInit, OnDestroy {

    services: Service[];
    public service: RichService;
    public errorMessage: string;
    public EU: string[];
    public WW: string[];
    private Math: Math;
    private sub: Subscription;
    // private providers: any = {};
    // public stats: any = {visits: 0, favourites: 0, externals: 0};

    serviceMapOptions: any = null;

    myProviders: Provider[] = [];
    canAddOrEditService: boolean = false;

    constructor(public route: ActivatedRoute, public router: NavigationService, public resourceService: ResourceService,
                public authenticationService: AuthenticationService, public userService: UserService) {
        this.Math = Math;
    }

    ngOnInit() {

        this.canAddOrEditService = false;

        if(this.authenticationService.isLoggedIn()) {
            this.sub = this.route.params.subscribe(params => {
                Observable.zip(
                    this.resourceService.getEU(),
                    this.resourceService.getWW(),
                    this.resourceService.getRichService(params["id"]),
                    this.resourceService.getMyServiceProviders(),
                ).subscribe(suc => {
                    this.EU = suc[0];
                    this.WW = suc[1];
                    this.service = suc[2][0];
                    this.myProviders = suc[3];

                    console.log('Service', this.service);

                    /* check if the current user can add a new or edit the service */
                    if(this.myProviders && this.myProviders.length>0)
                        this.canAddOrEditService = this.myProviders.some( p => this.service.providers.some(x => x === p.id) );

                    this.setCountriesForService(this.service.places);

                    let serviceIDs = (this.service.requiredServices || []).concat(this.service.relatedServices || [])
                        .filter((e, i, a) => a.indexOf(e) === i);
                    if (serviceIDs.length > 0) {
                        this.resourceService.getSelectedServices(serviceIDs)
                            .subscribe(services => this.services = services);
                    }
                });
            });
        } else {
            this.sub = this.route.params.subscribe(params => {
                Observable.zip(
                    this.resourceService.getEU(),
                    this.resourceService.getWW(),
                    this.resourceService.getRichService(params["id"]),
                ).subscribe(suc => {
                    this.EU = suc[0];
                    this.WW = suc[1];
                    this.service = suc[2][0];

                    console.log('Service', this.service);

                    this.setCountriesForService(this.service.places);

                    let serviceIDs = (this.service.requiredServices || []).concat(this.service.relatedServices || [])
                        .filter((e, i, a) => a.indexOf(e) === i);
                    if (serviceIDs.length > 0) {
                        this.resourceService.getSelectedServices(serviceIDs)
                            .subscribe(services => this.services = services);
                    }
                });
            });
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    setCountriesForService(data : any) {

        let places = this.resourceService.expandRegion(JSON.parse(JSON.stringify(data || [])), this.EU, this.WW);

        this.serviceMapOptions = {
            chart: {
                map: 'custom/europe',
                // borderWidth: 1
            },
            title: {
                text: 'Countries serviced by ' + this.service.name
            },
            // subtitle: {
            //     text: 'Demo of drawing all areas in the map, only highlighting partial data'
            // },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Country',
                data: places.map(e => e.toLowerCase()).map(e => [e, 1]),
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    formatter: function () {
                        if (this.point.value) {
                            return this.point.name;
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}'
                }
            }]
        };
    }

    getShownRating() {
        //if user has rated, then show user rating
        //else show average rating
    }

    getPrettyService(id) {
        return (this.services || []).find(e => e.id == id) || {id, name: "Name not found!"};
    }

    visit() {
        // this.resourceService.recordEvent(this.service.id, "EXTERNAL").subscribe(suc => this.router.goOffsite(this.service.url.toString()));
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