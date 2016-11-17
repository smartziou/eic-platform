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
 * Created by stefania on 9/7/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var resource_service_1 = require("../../../services/resource.service");
var CorpusLandingPageComponent = (function () {
    function CorpusLandingPageComponent(route, router, resourceService) {
        this.route = route;
        this.router = router;
        this.resourceService = resourceService;
    }
    CorpusLandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.resourceService.getCorpus(id).subscribe(function (corpus) { return _this.corpus = corpus; }, function (error) { return _this.handleError(error); });
        });
    };
    CorpusLandingPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CorpusLandingPageComponent.prototype.goBack = function () {
        window.history.back();
    };
    CorpusLandingPageComponent.prototype.handleError = function (error) {
        this.errorMessage = 'System error loading corpus (Server responded: ' + error + ')';
    };
    CorpusLandingPageComponent = __decorate([
        core_1.Component({
            selector: 'corpus-landing-page',
            templateUrl: 'app/pages/landingpages/corpus/corpus-landing-page.component.html',
            styleUrls: ['app/pages/landingpages/landing-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, resource_service_1.ResourceService])
    ], CorpusLandingPageComponent);
    return CorpusLandingPageComponent;
}());
exports.CorpusLandingPageComponent = CorpusLandingPageComponent;
//# sourceMappingURL=corpus-landing-page.component.js.map