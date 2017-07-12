/**
 * Created by stefania on 7/6/17.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";

@Component({
    selector: 'my-corpora',
    templateUrl: './my-corpora.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyCorporaComponent {

    public searchResults: SearchResults;
    public corpora: OMTDCorpus[] = [];
    public errorMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {
        this.resourceService.getMyCorpora().subscribe(
            searchResults => this.updateMyCorpora(searchResults),
            error => this.handleError(<any>error));
    }

    updateMyCorpora(searchResults: SearchResults) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.corpora.length = 0;

        for (let corpus of this.searchResults.results) {
            this.corpora.push(<OMTDCorpus> corpus.resource);
        }

        // //update form values using URLParameters
        // for (let urlParameter of this.urlParameters) {
        //     if(urlParameter.key === 'query') {
        //         this.searchCorporaForm.get('query').setValue(urlParameter.values[0]);
        //     } else {
        //         for(let facet of this.searchResults.facets) {
        //             if(facet.field === urlParameter.key) {
        //                 //
        //                 for(let parameterValue of urlParameter.values) {
        //                     for(let facetValue of facet.values) {
        //                         if(parameterValue === facetValue.value)
        //                             facetValue.isChecked = true;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        this.pageSize = 10;
        this.currentPage = (searchResults.from / this.pageSize) + 1;
        this.totalPages = Math.ceil(searchResults.total / this.pageSize);

        if(this.currentPage == 1) {
            this.isFirstPageDisabled = true;
            this.isPreviousPageDisabled = true;
        }

        if(this.currentPage == this.totalPages) {
            this.isLastPageDisabled = true;
            this.isNextPageDisabled = true;
        }
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving user corpora (Server responded: ' + error + ')';
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