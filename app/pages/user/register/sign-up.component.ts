/**
 * Created by stefania on 8/1/17.
 */

import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../domain/eic-model";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs/Observable";
import { ResourceService } from "../../../services/resource.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls:  ['./sign-up.component.css']
})

export class SignUpComponent {

    private signUpForm: FormGroup;
    private user: User;
    private errorMessage: string = null;
    private successMessage: string = null;
    private submitted = false;
    private providers: string[] = null;
    private endpoint = process.env.API_ENDPOINT;
    private showProvider: boolean = false;
    private pass: string = "";

    ngOnInit() {
        this.resourceService.getProviders().subscribe(
            providers => this.storeProviders(providers),
            error => this.handleError(<any>error)
        );
    }

    storeProviders(providers: string[]) {
        this.providers = providers;
    }

    private handleError (error: Response | any) {
        let errMsg = "";
        if (error instanceof Response) {
            const body = error.text() || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errMsg = (error.message) ? error.message : error.status ? `${error.status}` : 'Server error';
            console.error(errMsg);
        }
        return Observable.throw(errMsg);
    }

    constructor(private resourceService: ResourceService, fb: FormBuilder, private userService: UserService, private router: Router) {
        this.signUpForm = fb.group({
            "name": ["Παναγιώτης", Validators.required],
            "surname": ["Λαμπρόπουλος", Validators.required],
            "email": ["pgl@otenet.gr", Validators.compose([Validators.required, Validators.email])],
            "password": ["my actual password irl", Validators.required],
            "confirmPassword": ["my actual password irl", Validators.required],
            "affiliation": ["di"],
            "providerAdministrator": [false],
            "provider": [""],
        });
    }

    onSubmit(myUser: User, isValid: boolean) {
        //TODO: check if model is valid
        this.pass = myUser.password;
        if(isValid) {
            this.userService.registerUser(myUser).subscribe(
                user => this.onRegisterFinished(user),
                error => this.errorMessage = <any>error);
        } else {
            this.errorMessage = 'Form not valid';
        }
    }

    onRegisterFinished(user: User) {
        console.log(user);
        this.user = user;
        this.submitted = true;

        this.successMessage =  "Activation e-mail was sent to " + user.email;
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