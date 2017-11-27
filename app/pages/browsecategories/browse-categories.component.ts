/**
 * Created by stefania on 8/4/17.
 */

import {Component, OnInit} from "@angular/core";
import {BrowseResults} from "../../domain/browse-results";
import {Service} from "../../domain/eic-model";
import {NavigationService} from "../../services/navigation.service";
import {ResourceService} from "../../services/resource.service";

@Component({
    selector: "browse-categories",
    templateUrl: "./browse-categories.component.html",
    styleUrls: ["./browse-categories.component.css"]
})
export class BrowseCategoriesComponent implements OnInit {
    public browseResults: BrowseResults;
    public errorMessage: string;
    public browseResultsColumns: BrowseResults[] = [];

    constructor(private router: NavigationService, private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.resourceService.getServicesByCategories()
        .subscribe(browseResults => this.updateBrowseResults(browseResults));
    }

    updateBrowseResults(browseResults: BrowseResults) {
        this.browseResults = browseResults;
        let noOfServices: number = 0;
        let keys = Object.keys(this.browseResults);
        for (let key of keys) {
            let services: Service[] = this.browseResults[key];
            noOfServices += services.length;
        }
        let servicesPerColumn: number = noOfServices / 3;
        let counter: number = 0;
        let columnIndex: number = 0;
        this.browseResultsColumns.push(new BrowseResults());
        for (let key of keys) {
            let services: Service[] = this.browseResults[key];
            counter += services.length;
            this.browseResultsColumns[columnIndex].data[key] = (services);
            if (counter > servicesPerColumn) {
                columnIndex++;
                counter = 0;
                this.browseResultsColumns.push(new BrowseResults());
            }
        }
    }
}