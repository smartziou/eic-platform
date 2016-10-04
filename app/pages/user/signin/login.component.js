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
 * Created by stefania on 8/29/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var authentication_service_1 = require("../../../services/authentication.service");
var user_service_1 = require("../../../services/user.service");
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(fb, authenticationService, userService, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.form = fb.group({
            "username": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function (myUser, isValid) {
        var _this = this;
        //TODO: check if model is valid
        console.log(myUser, isValid);
        this.userService.loginUser(myUser.username, myUser.password).subscribe(function (user) { return _this.loginUser(user); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.loginUser = function (user) {
        this.user = user;
        this.authenticationService.login(user);
        this.submitted = true;
        this.router.navigate(['/editProfile']);
        //TODO: see if authentication service has a redirect URL (https://angular.io/docs/ts/latest/guide/router.html#!#can-activate-guard)
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/pages/user/signin/login.component.html',
            styleUrls: ['app/pages/user/signin/login.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map