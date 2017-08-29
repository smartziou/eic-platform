/**
 * Created by stefania on 8/1/17.
 */

import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../domain/eic-model";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs/Observable";
import { ResourceService } from "../../../services/resource.service";

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
            errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg);
        }
        return Observable.throw(errMsg);
    }

    constructor(private resourceService: ResourceService, fb: FormBuilder, private userService: UserService) {
        // this.registrationForm = fb.group({
        //     "name": ["", Validators.required],
        //     "surname": ["", Validators.required],
        //     "email": ["", Validators.required],
        //     'passwords': fb.group({
        //         password: ['', Validators.required],
        //         confirmPassword: ['', Validators.required]
        //     }, {validator: this.areEqual}),
        //     "affiliation": [""],
        // });
        this.signUpForm = fb.group({
            "name": ["Παναγιώτης", Validators.required],
            "surname": ["Λαμπρόπουλος", Validators.required],
            "email": ["pgl@otenet.gr", Validators.required],
            "password": ["my actual password irl", Validators.required],
            "confirmPassword": ["my actual password irl", Validators.required],
            "affiliation": ["di"],
            "providerAdministrator": [false],
            "provider": [""],
        });
    }

    onSubmit(myUser: User, isValid: boolean) {

        //TODO: check if model is valid
        console.log(myUser, isValid);

        if(isValid) {
            this.userService.registerUser(myUser).subscribe(
                user => this.registerUser(user),
                error => this.errorMessage = <any>error);
        } else {
            this.errorMessage = 'Form not valid';
        }
    }

    registerUser(user: User) {
        this.user = user;
        this.submitted = true;
        console.log('registered User', this.user);
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