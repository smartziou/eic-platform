/**
 * Created by pgl on 09/10/17.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: "activate",
    templateUrl: "./activate.component.html",
    styleUrls: ["./activate.component.css"]
})

export class ActivateComponent {
    errorMessage: string = null;
    successMessage: string = null;

    constructor(private resourceService: ResourceService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(this.onParams.bind(this));
    }

    onParams(params) {
        this.resourceService.activateUserAccount(params["id"]).subscribe(suc => this.router.navigate(["/signIn"]));
    }
}
