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
var forms_1 = require('@angular/forms');
var user_service_1 = require("../../../services/user.service");
var RegisterComponent = (function () {
    function RegisterComponent(fb, userService) {
        this.userService = userService;
        this.submitted = false;
        // this.registrationForm = fb.group({
        //     "name": ["", Validators.required],
        //     "surname": ["", Validators.required],
        //     "username": ["", Validators.required],
        //     "email": ["", Validators.required],
        //     'passwords': fb.group({
        //         password: ['', Validators.required],
        //         confirmPassword: ['', Validators.required]
        //     }, {validator: this.areEqual}),
        //     "affiliation": [""],
        // });
        this.registrationForm = fb.group({
            "name": ["", forms_1.Validators.required],
            "surname": ["", forms_1.Validators.required],
            "username": ["", forms_1.Validators.required],
            "email": ["", forms_1.Validators.required],
            'password': ['', forms_1.Validators.required],
            'confirmPassword': ['', forms_1.Validators.required],
            "affiliation": [""],
        });
    }
    RegisterComponent.prototype.onSubmit = function (myUser, isValid) {
        var _this = this;
        //TODO: check if model is valid
        console.log(myUser, isValid);
        if (isValid) {
            this.userService.registerUser(myUser).subscribe(function (user) { return _this.registerUser(user); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Form not valid';
        }
    };
    RegisterComponent.prototype.registerUser = function (user) {
        this.user = user;
        this.submitted = true;
        console.log('registered User', this.user);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/pages/user/register/register.component.html',
            styleUrls: ['app/pages/user/register/register.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map