/**
 * Created by stefania on 7/5/16.
 */

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Service} from "../../domain/eic-model";
import {SearchQuery} from "../../domain/search-query";
import {NavigationService} from "../../services/navigation.service";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    public searchForm: FormGroup;
    public categories: category[] = [
        {
            value: "Authentication and Authorization Infrastructure",
            icon: "fingerprint_scanning_authorization.svg",
            hover: "fingerprint_scanning_authorization_hover.svg"
        },
        {value: "Compute", icon: "cloud_server.svg", hover: "cloud_server_hover.svg"},
        {value: "Connectivity", icon: "connectivity.svg", hover: "connectivity_hover.svg"},
        {value: "Consulting", icon: "consulting.svg", hover: "consulting_hover.svg"},
        {value: "Operations", icon: "keyword.svg", hover: "keyword_hover.svg"}
        // {value: "Data Connectivity", icon: "data-connectivity.svg", hover: "data-connectivity_hover.svg"},
        // {value: "Data Discovery", icon: "keyword.svg", hover: "keyword_hover.svg"},
        // {value: "Data Movement", icon: "database.svg", hover: "database_hover.svg"},
        // {value: "Data Registration", icon: "cloud_server.svg", hover: "cloud_server_hover.svg"},
        // {value: "Data Storage", icon: "database_security.svg", hover: "database_security_hover.svg"}
    ];
    private services: Service[];

    constructor(fb: FormBuilder, private router: NavigationService) {
        this.searchForm = fb.group({"query": [""]});
    }

    ngOnInit() {
        //fetch categories, check size, skip unpopulated ones here
    }

    onSubmit(searchValue: SearchQuery) {
        return this.router.search({query: searchValue.query});
    }
}

class category {
    value: string;
    icon: string;
    hover: string;
}

