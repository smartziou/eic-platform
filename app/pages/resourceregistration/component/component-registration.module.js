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
 * Created by stefania on 10/5/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var resource_service_1 = require("../../../services/resource.service");
var component_registration_routing_1 = require("./component-registration.routing");
var component_registration_component_1 = require("./component-registration.component");
var ComponentRegistrationModule = (function () {
    function ComponentRegistrationModule() {
    }
    ComponentRegistrationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                component_registration_routing_1.componentRegistrationRouting
            ],
            declarations: [
                component_registration_component_1.ComponentRegistrationComponent
            ],
            providers: [
                resource_service_1.ResourceService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentRegistrationModule);
    return ComponentRegistrationModule;
}());
exports.ComponentRegistrationModule = ComponentRegistrationModule;
//# sourceMappingURL=component-registration.module.js.map