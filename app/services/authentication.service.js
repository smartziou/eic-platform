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
 * Created by stefania on 8/30/16.
 */
var core_1 = require('@angular/core');
var AuthenticationService = (function () {
    function AuthenticationService() {
        this.isLoggedIn = false;
    }
    AuthenticationService.prototype.login = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.isLoggedIn = true;
        // this.lock.show((error: string, profile: Object, id_token: string) => {
        //     if (error) {
        //         console.log(error);
        //     }
        //     // We get a profile object for the user from Auth0
        //     localStorage.setItem('profile', JSON.stringify(profile));
        //     // We also get the user's JWT
        //     localStorage.setItem('id_token', id_token);
        // });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        if (localStorage.getItem("user") === null) {
            return false;
        }
        return true;
    };
    AuthenticationService.prototype.getLoggedInUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map