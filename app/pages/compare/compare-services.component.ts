/**
 * Created by stefania on 8/1/17.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../domain/eic-model";
import {SearchQuery} from "../../domain/search-query";
import {URLParameter} from "../../domain/url-parameter";
import {AuthenticationService} from "../../services/authentication.service";
import {ResourceService} from "../../services/resource.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: "compare-services",
    templateUrl: "./compare-services.component.html",
    styleUrls: ["./compare-services.component.css"]
})
export class CompareServicesComponent implements OnInit {
    searchForm: FormGroup;
    public services: Service[] = [];
    public errorMessage: string;
    private urlParameters: URLParameter[] = [];
    private sub: Subscription;

    constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
                private resourceService: ResourceService, private authenticationService: AuthenticationService,
                private userService: UserService) {
        this.searchForm = fb.group({
            "query": [""]
        });
    }

    ngOnInit() {
        this.sub = this.activatedRoute
        .params
        .subscribe(params => {
            this.urlParameters.splice(0, this.urlParameters.length);
            for (var obj in params) {
                if (params.hasOwnProperty(obj)) {
                    var urlParameter: URLParameter = {
                        key: obj,
                        values: params[obj].split(",")
                    };
                    this.urlParameters.push(urlParameter);
                }
            }
            if (this.urlParameters[0].values.length > 4) {
                this.errorMessage = "The maximum number of services for comparison is 4";
            } else {
                // request results from the registry
                this.resourceService.getSelectedServices(this.urlParameters[0].values).subscribe(
                    services => this.services = services);
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(searchValue: SearchQuery) {
        this.router.navigate(["/search", {query: searchValue.query}]);
    }

    // handleError(message: string, error) {
    //     this.errorMessage = message + ' (Server responded: ' + error + ')';
    // }
    addToFavorites(service) {
        if (this.authenticationService.isLoggedIn()) {
            this.userService.addFavourite(service, this.authenticationService.user.id);
        } else {
            this.router.navigate(["/signIn"]);
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