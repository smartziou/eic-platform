/**
 * Created by stefania on 8/4/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from "../../services/resource.service";
import { BrowseResults } from "../../domain/browse-results";
import { Service } from "../../domain/eic-model";
import {count} from "rxjs/operator/count";

@Component({
    selector: 'browse-categories',
    templateUrl: './browse-categories.component.html',
    styleUrls:  ['./browse-categories.component.css'],
})

export class BrowseCategoriesComponent implements OnInit {

    public browseResults: BrowseResults;
    public errorMessage: string;

    public browseResultsColumns: BrowseResults[] = [];

    constructor(
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private resourceService: ResourceService) {
    }

    ngOnInit() {
        // request results from the registry
        this.resourceService.getServicesByCategories().subscribe(
            browseResults => this.updateBrowseResults(browseResults),
            error => this.handleError('System error retrieving browse results', <any>error));

    }

    updateBrowseResults(browseResults: BrowseResults) {

        this.browseResults = browseResults;

        let noOfServices: number = 0;

        let keys = Object.keys(this.browseResults);
        for(let key of keys) {
            let services : Service[] = this.browseResults[key];
            noOfServices += services.length;
        }

        let servicesPerColumn: number = noOfServices / 3;

        let counter: number = 0;
        let columnIndex: number = 0;


        this.browseResultsColumns.push(new BrowseResults());
        for(let key of keys) {

            let services : Service[] = this.browseResults[key];
            counter += services.length;
            console.log(this.browseResultsColumns);
            this.browseResultsColumns[columnIndex].data[key] = (services);

            if(counter>servicesPerColumn) {
                columnIndex++;
                counter = 0;
                this.browseResultsColumns.push(new BrowseResults());
            }
        }

        console.log('No of Services: ', noOfServices);
        console.log('Services per column: ', servicesPerColumn);
    }

    visitServiceDetails(id: string) {
        this.router.navigate(['/landingPage/service' + '/', id]);
    }

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }
}