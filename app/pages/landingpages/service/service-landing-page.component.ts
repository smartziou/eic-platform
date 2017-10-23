import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Service} from "../../../domain/eic-model";
import {ResourceService} from "../../../services/resource.service";
import {Subscription} from "rxjs/Subscription";
import {AuthenticationLocalService} from "../../../services/authentication.local.service";

@Component({
    selector: 'service-landing-page',
    templateUrl: './service-landing-page.component.html',
    styleUrls: ['../landing-page.component.css'],
})

export class ServiceLandingPageComponent {
    private Math: Math;

    public service: Service;
    public errorMessage: string;
    private sub: Subscription;
    private providers: any = {};

    constructor(private route: ActivatedRoute, private router: Router, private resourceService: ResourceService, private authenticationLocalService: AuthenticationLocalService) {
        this.Math = Math;
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            suc => {
                this.providers = suc;
            },
            err => console.error(err)
        );

        this.sub = this.route.params.subscribe(params => {
            let id = atob(params['id']);
            this.resourceService.recordHit(id, "internal");
            this.resourceService.getService(id).subscribe(
                service => this.service = service,
                error => this.handleError(<any>error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    handleError(error) {
        this.errorMessage = 'System error loading service (Server responded: ' + error + ')';
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
        let allowLogin = false;
        if (allowLogin && this.authenticationLocalService.loggedIn()) {
            //Rate logic goes here
        } else {
            this.router.navigate(['/signIn']);
        }
    }

    // process() {
    //
    //     sessionStorage.setItem('runApplication.application', this.component.metadataHeaderInfo.metadataRecordIdentifier.value);
    //
    //     var map: { [name: string]: string; } = { };
    //
    //     if(sessionStorage.getItem('runApplication.input')) {
    //         map['input'] = sessionStorage.getItem('runApplication.input');
    //     }
    //     if(sessionStorage.getItem('runApplication.application')) {
    //         map['application'] = sessionStorage.getItem('runApplication.application');
    //     }
    //
    //     this.router.navigate(['/runApplication', map]);
    // }
}