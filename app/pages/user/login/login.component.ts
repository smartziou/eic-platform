/**
 * Created by stefania on 8/1/17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from "../../../domain/eic-model";
import { AuthenticationService } from "../../../services/authentication.service";
import { UserService } from "../../../services/user.service";
import { Router }       from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
})

export class LoginComponent {

    public loginForm: FormGroup;
    public submitted: boolean;
    public user: User;
    public errorMessage: string;

    constructor(fb: FormBuilder, private authenticationService: AuthenticationService,
                private userService: UserService, private router: Router) {
        this.loginForm = fb.group({
            "email": ["pgl@otenet.gr", Validators.compose([Validators.required, Validators.email])],
            "password": ["my actual password irl", Validators.required]
        });
    }

    onSubmit(myUser: User, isValid: boolean) {

        //TODO: check if model is valid
        console.log(myUser, isValid);

        this.userService.loginUser(myUser.email, myUser.password).subscribe(
            user => this.loginUser(user),
            error =>  this.errorMessage = <any>error);
    }

    loginUser(user: User) {
        this.user = user;
        this.authenticationService.login(user);

        this.submitted = true;

        this.router.navigate(['/dashboard']);

        //TODO: see if authentication service has a redirect URL (https://angular.io/docs/ts/latest/guide/router.html#!#can-activate-guard)
    }
}
