/**
 * Created by stefania on 8/1/17.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Service} from "../../domain/eic-model";
import {SearchQuery} from "../../domain/search-query";
import {AuthenticationService} from "../../services/authentication.service";
import {ComparisonService} from "../../services/comparison.service";
import {NavigationService} from "../../services/navigation.service";
import {ResourceService} from "../../services/resource.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: "compare-services",
    templateUrl: "./compare-services.component.html",
    styleUrls: ["./compare-services.component.css"]
})
export class CompareServicesComponent implements OnInit, OnDestroy {
    searchForm: FormGroup;
    public services: Service[] = [];
    public errorMessage: string;
    private sub: Subscription;
    providers: any;
    nologo: URL = new URL("http://fvtelibrary.com/img/user/NoLogo.png");

    constructor(fb: FormBuilder, private route: ActivatedRoute, private router: NavigationService,
                private resourceService: ResourceService, private authenticationService: AuthenticationService,
                private userService: UserService, public comparisonService: ComparisonService) {
        this.searchForm = fb.group({"query": [""]});
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(providers => {
            this.providers = providers;
            this.sub = this.route.params.subscribe(params => {
                let ids = (params.services || "").split(",");
                if (ids.length > 1) {
                    this.resourceService.getSelectedServices(ids).subscribe(
                        services => this.services = services
                    );
                } else {
                    this.router.search({});
                }
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(searchValue: SearchQuery) {
        return this.router.search({query: searchValue.query});
    }

    favourite(service) {
        if (this.authenticationService.isLoggedIn()) {
            this.userService.addFavourite(service, this.authenticationService.user.id);
        } else {
            this.router.login();
        }
    }
}