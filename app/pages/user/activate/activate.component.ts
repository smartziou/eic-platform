/**
 * Created by pgl on 09/10/17.
 */
import {Component} from "@angular/core";
import {ResourceService} from "../../../services/resource.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'activate',
    templateUrl: './activate.component.html',
    styleUrls: ['./activate.component.css']
})

export class ActivateComponent {
    errorMessage: string = null;
    successMessage: string = null;

    ngOnInit() {
        this.route.params.subscribe(this.onParams.bind(this));
    }

    onParams(params) {
        this.resourceService.activateUserAccount(params["id"]).subscribe(
            suc => this.router.navigate(['/signIn']),
            err => this.router.navigate(['/signIn'])
        )
    }

    constructor(private resourceService: ResourceService, private route: ActivatedRoute, private router: Router) {
    }
}
