import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from "../../../domain/eic-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'service-landing-page',
    templateUrl: './service-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ServiceLandingPageComponent {

    public service: Service;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

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