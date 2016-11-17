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
 * Created by stefania on 11/16/16.
 */
var core_1 = require('@angular/core');
var openminted_model_1 = require("../../../domain/openminted-model");
var ComponentDistributionInfoComponent = (function () {
    function ComponentDistributionInfoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', openminted_model_1.ComponentDistributionInfo)
    ], ComponentDistributionInfoComponent.prototype, "componentDistributionInfo", void 0);
    ComponentDistributionInfoComponent = __decorate([
        core_1.Component({
            selector: 'component-distribution-info',
            templateUrl: 'app/pages/landingpages/resourceelements/component-distribution-info.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentDistributionInfoComponent);
    return ComponentDistributionInfoComponent;
}());
exports.ComponentDistributionInfoComponent = ComponentDistributionInfoComponent;
//# sourceMappingURL=component-distribution-info.component.js.map