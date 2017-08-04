/**
 * Created by stefania on 8/31/16.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { SearchQuery } from "../../domain/search-query";
import { URLParameter } from "./../../domain/url-parameter";
import { ResourceService } from "../../services/resource.service";
import { SearchResults } from "../../domain/search-results";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls:  ['./search.component.css'],
})

export class SearchComponent {

    private searchForm: FormGroup;
    private errorMessage: string;
    private sub: Subscription;

    private urlParameters: URLParameter[] = [];
    
    private searchResults: SearchResults;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;
    
    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    private foundResults = true;

    private advanced: boolean = false;

    private servicesToCompare: string[] = [];

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        this.searchForm = fb.group({
            "query": [""],
        });
    }

    ngOnInit() {

        if(sessionStorage.getItem('compareServices'))
            this.servicesToCompare = JSON.parse(sessionStorage.getItem('compareServices'));

        this.sub = this.activatedRoute
            .params
            .subscribe(params => {
                
                this.urlParameters.splice(0,this.urlParameters.length);
                this.foundResults = true;

                for (var obj in params) {
                    if (params.hasOwnProperty(obj)) {
                        var urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };
                        this.urlParameters.push(urlParameter);
                        // console.log(urlParameter);
                    }
                }

                // console.log(this.urlParameters);
                //request results from the registry
                this.resourceService.search(this.urlParameters).subscribe(
                    searchResults => this.updateSearchResults(searchResults),
                    error => this.handleError(<any>error));
            });
    }
    
    updateSearchResults(searchResults: SearchResults) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        if(this.searchResults.results.length==0)
            this.foundResults = false;

        //update form values using URLParameters
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'query') {
                this.searchForm.get('query').setValue(urlParameter.values[0]);
            } else if(urlParameter.key === 'advanced') {
                if(urlParameter.values[0]=='true')
                    this.advanced = true;
                else
                    this.advanced = false;
            } else {
                for(let facet of this.searchResults.facets) {
                    if(facet.field === urlParameter.key) {
                        //
                        for(let parameterValue of urlParameter.values) {
                            for(let facetValue of facet.values) {
                                if(parameterValue === facetValue.value)
                                    facetValue.isChecked = true;
                            }
                        }
                    }
                }
            }
        }

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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(searchValue: SearchQuery) {

        var foundQuery = false;

        var queryParameterIndex = 0;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'query') {
                foundQuery = true;
                if(searchValue.query === '')
                    this.urlParameters.splice(queryParameterIndex, 1);
                else {
                    urlParameter.values.splice(0,urlParameter.values.length);
                    urlParameter.values.push(searchValue.query);
                }

            }
            queryParameterIndex ++;
        }

        if(!foundQuery && searchValue.query != '') {

            var searchQuery: URLParameter = {
                key: 'query',
                values: [searchValue.query]
            };
            this.urlParameters.push(searchQuery);
        }

        this.navigateUsingParameters();
    }

    deselectFacet(category: string, value: string) {

        var categoryIndex = 0;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === category) {
                var valueIndex = urlParameter.values.indexOf(value, 0);
                if (valueIndex > -1) {
                    urlParameter.values.splice(valueIndex, 1);
                    if(urlParameter.values.length == 0) {
                        this.urlParameters.splice(categoryIndex, 1);
                    }
                }
            }
            categoryIndex ++;
        }

        this.navigateUsingParameters();
    }

    onSelection(e, category: string, value: string) {

        if(e.target.checked) {

            // console.log('Selected value \'' + value + '\' from category \'' + category + '\'');

            var foundCategory = false;
            for (let urlParameter of this.urlParameters) {
                if(urlParameter.key === category) {
                    foundCategory = true;
                    urlParameter.values.push(value);
                }
            }
            if(!foundCategory) {
                var newParameter: URLParameter = {
                    key: category,
                    values: [value]
                };
                this.urlParameters.push(newParameter);
            }

        } else {

            // console.log('Deselected value \'' + value + '\' from category \'' + category + '\'');

            var categoryIndex = 0;
            for (let urlParameter of this.urlParameters) {
                if(urlParameter.key === category) {
                    var valueIndex = urlParameter.values.indexOf(value, 0);
                    if (valueIndex > -1) {
                        urlParameter.values.splice(valueIndex, 1);
                        if(urlParameter.values.length == 0) {
                            this.urlParameters.splice(categoryIndex, 1);
                        }
                    }
                }
                categoryIndex ++;
            }
        }
        
        this.navigateUsingParameters();
    }

    navigateUsingParameters() {

        var map: { [name: string]: string; } = { };
        for (let urlParameter of this.urlParameters) {
            var concatValue = '';
            var counter = 0;
            for(let value of urlParameter.values) {
                if(counter!=0)
                    concatValue += ',';
                concatValue += value;
                counter++;
            }
            map[urlParameter.key] = concatValue;
        }

        this.router.navigate(['/search', map]);
    }

    gotoDetail(id: string) {
        this.router.navigate(['/landingPage/service' + '/', id]);
    }

    addToCompare(id: string) {
        if(this.servicesToCompare.includes(id)) {
            this.servicesToCompare.splice(this.servicesToCompare.indexOf(id),1)
        } else
            this.servicesToCompare.push(id);
        sessionStorage.setItem('compareServices', JSON.stringify(this.servicesToCompare));
    }

    compareServices() {
        var map: { [name: string]: string; } = { };
        map['services'] = this.servicesToCompare.toString();
        this.router.navigate(['/compare', map]);
    }

    handleError(error) {
        this.errorMessage = 'System error searching for resources (Server responded: ' + error + ')';
    }

    goToFirstPage() {

        var from: number = 0;
        var to: number = 9;

        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    }

    goToPreviousPage() {

        var from: number = this.searchResults.from;
        var to: number = this.searchResults.to;

        from -= this.pageSize;
        to -= this.pageSize;

        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    }

    goToNextPage() {

        var from: number = this.searchResults.from;
        var to: number = this.searchResults.to;

        from += this.pageSize;
        to += this.pageSize;

        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    }

    goToLastPage() {

        var from: number = Math.floor(this.searchResults.total/this.pageSize) * this.pageSize;
        var to: number = this.searchResults.total - 1;

        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    }

    updatePagingURLParameters(from: number, to: number) {

        var foundFromCategory = false;
        var foundToCategory = false;

        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'from') {
                foundFromCategory = true;
                urlParameter.values = [];
                urlParameter.values.push(from+'');
            }
            if(urlParameter.key === 'to') {
                foundToCategory = true;
                urlParameter.values = [];
                urlParameter.values.push(to+'');
            }
        }
        if(!foundFromCategory) {
            var newFromParameter: URLParameter = {
                key: 'from',
                values: [from+'']
            };
            this.urlParameters.push(newFromParameter);
        }
        if(!foundToCategory) {
            var newToParameter: URLParameter = {
                key: 'to',
                values: [to+'']
            };
            this.urlParameters.push(newToParameter);
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}