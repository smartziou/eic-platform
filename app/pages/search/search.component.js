"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by stefania on 8/31/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var resource_service_1 = require("../../services/resource.service");
var SearchComponent = (function () {
    function SearchComponent(fb, router, activatedRoute, resourceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.resourceService = resourceService;
        this.urlParameters = [];
        this.shortResultsInfo = [];
        this.pageSize = 0;
        this.currentPage = 0;
        this.totalPages = 0;
        this.isPreviousPageDisabled = false;
        this.isFirstPageDisabled = false;
        this.isNextPageDisabled = false;
        this.isLastPageDisabled = false;
        this.foundResults = true;
        this.searchForm = fb.group({
            "query": [""],
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute
            .params
            .subscribe(function (params) {
            _this.urlParameters.splice(0, _this.urlParameters.length);
            _this.foundResults = true;
            for (var obj in params) {
                if (params.hasOwnProperty(obj)) {
                    var urlParameter = {
                        key: obj,
                        values: params[obj].split(',')
                    };
                    _this.urlParameters.push(urlParameter);
                }
            }
            // console.log(this.urlParameters);
            //request results from the registry
            _this.resourceService.search(_this.urlParameters).subscribe(function (searchResults) { return _this.updateSearchResults(searchResults); }, function (error) { return _this.handleError(error); });
        });
    };
    SearchComponent.prototype.updateSearchResults = function (searchResults) {
        //INITIALISATIONS
        this.errorMessage = null;
        this.searchResults = searchResults;
        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;
        this.shortResultsInfo.splice(0, this.shortResultsInfo.length);
        for (var _i = 0, _a = this.searchResults.results.components; _i < _a.length; _i++) {
            var component = _a[_i];
            var shortResultInfo = {
                // id: component.componentInfo.identificationInfo.identifiers[0].value,
                id: component.metadataHeaderInfo.metadataRecordIdentifier.value,
                title: component.componentInfo.identificationInfo.resourceNames[0].value,
                description: component.componentInfo.identificationInfo.descriptions[0].value,
                resourceType: 'component'
            };
            // console.log(component.resourceIdentificationInfo.resourceIdentifiers[0].id);
            // console.log(shortResultInfo.id);
            this.shortResultsInfo.push(shortResultInfo);
        }
        for (var _b = 0, _c = this.searchResults.results.corpora; _b < _c.length; _b++) {
            var corpus = _c[_b];
            var shortResultInfo = {
                // id: corpus.corpusInfo.identificationInfo.identifiers[0].value,
                id: corpus.metadataHeaderInfo.metadataRecordIdentifier.value,
                title: corpus.corpusInfo.identificationInfo.resourceNames[0].value,
                description: corpus.corpusInfo.identificationInfo.descriptions[0].value,
                resourceType: 'corpus'
            };
            this.shortResultsInfo.push(shortResultInfo);
        }
        if (this.shortResultsInfo.length == 0)
            this.foundResults = false;
        //update form values using URLParameters
        for (var _d = 0, _e = this.urlParameters; _d < _e.length; _d++) {
            var urlParameter = _e[_d];
            if (urlParameter.key === 'query') {
                this.searchForm.get('query').setValue(urlParameter.values[0]);
            }
            else {
                for (var _f = 0, _g = this.searchResults.facets; _f < _g.length; _f++) {
                    var facet = _g[_f];
                    if (facet.field === urlParameter.key) {
                        //
                        for (var _h = 0, _j = urlParameter.values; _h < _j.length; _h++) {
                            var parameterValue = _j[_h];
                            for (var _k = 0, _l = facet.values; _k < _l.length; _k++) {
                                var facetValue = _l[_k];
                                if (parameterValue === facetValue.value)
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
        if (this.currentPage == 1) {
            this.isFirstPageDisabled = true;
            this.isPreviousPageDisabled = true;
        }
        if (this.currentPage == this.totalPages) {
            this.isLastPageDisabled = true;
            this.isNextPageDisabled = true;
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SearchComponent.prototype.onSubmit = function (searchValue) {
        var foundQuery = false;
        var queryParameterIndex = 0;
        for (var _i = 0, _a = this.urlParameters; _i < _a.length; _i++) {
            var urlParameter = _a[_i];
            if (urlParameter.key === 'query') {
                foundQuery = true;
                if (searchValue.query === '')
                    this.urlParameters.splice(queryParameterIndex, 1);
            }
            queryParameterIndex++;
        }
        if (!foundQuery && searchValue.query != '') {
            var searchQuery = {
                key: 'query',
                values: [searchValue.query]
            };
            this.urlParameters.push(searchQuery);
        }
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.onSelection = function (e, category, value) {
        if (e.target.checked) {
            // console.log('Selected value \'' + value + '\' from category \'' + category + '\'');
            var foundCategory = false;
            for (var _i = 0, _a = this.urlParameters; _i < _a.length; _i++) {
                var urlParameter = _a[_i];
                if (urlParameter.key === category) {
                    foundCategory = true;
                    urlParameter.values.push(value);
                }
            }
            if (!foundCategory) {
                var newParameter = {
                    key: category,
                    values: [value]
                };
                this.urlParameters.push(newParameter);
            }
        }
        else {
            // console.log('Deselected value \'' + value + '\' from category \'' + category + '\'');
            var categoryIndex = 0;
            for (var _b = 0, _c = this.urlParameters; _b < _c.length; _b++) {
                var urlParameter = _c[_b];
                if (urlParameter.key === category) {
                    var valueIndex = urlParameter.values.indexOf(value, 0);
                    if (valueIndex > -1) {
                        urlParameter.values.splice(valueIndex, 1);
                        if (urlParameter.values.length == 0) {
                            this.urlParameters.splice(categoryIndex, 1);
                        }
                    }
                }
                categoryIndex++;
            }
        }
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.navigateUsingParameters = function () {
        var map = {};
        for (var _i = 0, _a = this.urlParameters; _i < _a.length; _i++) {
            var urlParameter = _a[_i];
            var concatValue = '';
            var counter = 0;
            for (var _b = 0, _c = urlParameter.values; _b < _c.length; _b++) {
                var value = _c[_b];
                if (counter != 0)
                    concatValue += ',';
                concatValue += value;
                counter++;
            }
            map[urlParameter.key] = concatValue;
        }
        this.router.navigate(['/search', map]);
    };
    SearchComponent.prototype.gotoDetail = function (resourceType, id) {
        //TODO remove ms. I have put it there because the id gets parsed without the ms
        // this.router.navigate(['/landingPage/' + resourceType + '/', 'ms' + id]);
        this.router.navigate(['/landingPage/' + resourceType + '/', id]);
    };
    SearchComponent.prototype.handleError = function (error) {
        this.errorMessage = 'System error searching for resources (Server responded: ' + error + ')';
    };
    SearchComponent.prototype.goToFirstPage = function () {
        var from = 0;
        var to = 9;
        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.goToPreviousPage = function () {
        var from = this.searchResults.from;
        var to = this.searchResults.to;
        from -= this.pageSize;
        to -= this.pageSize;
        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.goToNextPage = function () {
        var from = this.searchResults.from;
        var to = this.searchResults.to;
        from += this.pageSize;
        to += this.pageSize;
        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.goToLastPage = function () {
        var from = Math.floor(this.searchResults.total / this.pageSize) * this.pageSize;
        var to = this.searchResults.total - 1;
        this.updatePagingURLParameters(from, to);
        this.navigateUsingParameters();
    };
    SearchComponent.prototype.updatePagingURLParameters = function (from, to) {
        var foundFromCategory = false;
        var foundToCategory = false;
        for (var _i = 0, _a = this.urlParameters; _i < _a.length; _i++) {
            var urlParameter = _a[_i];
            if (urlParameter.key === 'from') {
                foundFromCategory = true;
                urlParameter.values = [];
                urlParameter.values.push(from + '');
            }
            if (urlParameter.key === 'to') {
                foundToCategory = true;
                urlParameter.values = [];
                urlParameter.values.push(to + '');
            }
        }
        if (!foundFromCategory) {
            var newFromParameter = {
                key: 'from',
                values: [from + '']
            };
            this.urlParameters.push(newFromParameter);
        }
        if (!foundToCategory) {
            var newToParameter = {
                key: 'to',
                values: [to + '']
            };
            this.urlParameters.push(newToParameter);
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/pages/search/search.component.html',
            styleUrls: ['app/pages/search/search.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, resource_service_1.ResourceService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map