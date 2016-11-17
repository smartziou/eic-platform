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
 * Created by stefania on 9/6/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
        this._searchUrl = 'http://83.212.101.85:8080/omtd-registry/request/';
        this._resourcesUrl = 'http://83.212.101.85:8080/omtd-registry/request/';
    }
    // private _searchUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    // private _resourcesUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    ResourceService.prototype.search = function (urlParameters) {
        var searchQuery = '';
        var counter = 0;
        for (var _i = 0, urlParameters_1 = urlParameters; _i < urlParameters_1.length; _i++) {
            var urlParameter = urlParameters_1[_i];
            if (counter === 0)
                searchQuery += '?';
            if (urlParameter.key === 'query') {
                searchQuery += 'keyword=' + urlParameter.values[0];
            }
            else {
                var valuesCounter = 0;
                for (var _a = 0, _b = urlParameter.values; _a < _b.length; _a++) {
                    var value = _b[_a];
                    if (valuesCounter != 0)
                        searchQuery += '&';
                    searchQuery += urlParameter.key + '=' + value;
                    valuesCounter++;
                }
            }
            if (counter != urlParameters.length - 1)
                searchQuery += '&';
            counter++;
        }
        return this.http.get(this._searchUrl + searchQuery)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.getCorpus = function (id) {
        return this.http.get(this._resourcesUrl + "corpus/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.getComponent = function (id) {
        return this.http.get(this._resourcesUrl + "component/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ResourceService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    ResourceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map