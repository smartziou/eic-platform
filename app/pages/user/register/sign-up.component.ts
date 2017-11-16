/**
 * Created by stefania on 8/1/17.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../domain/eic-model";
import {ResourceService} from "../../../services/resource.service";
import {UserService} from "../../../services/user.service";

@Component({
    selector: "sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.css"]
})

export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    user: User;
    errorMessage: string = null;
    successMessage: string = null;
    submitted = false;
    providers: string[] = null;
    showProvider: boolean = false;
    pass: string = "";

    constructor(private resourceService: ResourceService, fb: FormBuilder, private userService: UserService, private router: Router) {
        this.signUpForm = fb.group({
            "name": ["", Validators.required],
            "surname": ["", Validators.required],
            "email": ["", Validators.compose([Validators.required, Validators.email])],
            "password": ["", Validators.required],
            "confirmPassword": ["", Validators.required],
            "affiliation": [""],
            "providerAdministrator": [false],
            "provider": [""]
        });
    }

    ngOnInit() {
        this.resourceService.getProviders().subscribe(providers => this.storeProviders(providers));
    }

    storeProviders(providers: string[]) {
        this.providers = providers;
    }

    onSubmit(myUser: User, isValid: boolean) {
        this.pass = myUser.password;
        if (isValid) {
            this.userService.registerUser(myUser).subscribe(user => this.onRegisterFinished(user));
        } else {
            this.errorMessage = "Form not valid";
        }
    }

    onRegisterFinished(user: User) {
        console.log(user);
        this.user = user;
        this.submitted = true;
        this.successMessage = "Activation e-mail was sent to " + user.email;
        setTimeout(() => this.router.navigate(["/signIn"]), 5000);
    }

    // areEqual(group: FormGroup) {
    //     let val;
    //     let valid = true;
    //
    //     for (name in group.controls) {
    //         if (val === undefined) {
    //             val = group.controls[name].value
    //         } else {
    //             if (val !== group.controls[name].value) {
    //                 valid = false;
    //                 break;
    //             }
    //         }
    //     }
    //
    //     if (valid) {
    //         return null;
    //     }
    //
    //     return {
    //         areEqual: true
    //     };
    // }
    //
    // matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    //     return (group: FormGroup): {[key: string]: any} => {
    //         let password = group.controls[passwordKey];
    //         let confirmPassword = group.controls[confirmPasswordKey];
    //
    //         if (password.value !== confirmPassword.value) {
    //             return {
    //                 mismatchedPasswords: true
    //             };
    //         }
    //     }
    // }
}
