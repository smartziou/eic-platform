/**
 * Created by stefania on 8/1/17.
 */

import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../domain/eic-model";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {

    public loginForm: FormGroup;
    public submitted: boolean;
    public user: User;
    public errorMessage: string;

    constructor(fb: FormBuilder, private authenticationService: AuthenticationService,
                private userService: UserService, private router: Router) {
        this.loginForm = fb.group({
            "email": ["", Validators.compose([Validators.required, Validators.email])],
            "password": ["", Validators.required]
        });
    }

    onSubmit(myUser: User, isValid: boolean) {
        if (isValid) {
            this.userService.loginUser(myUser.email, myUser.password).subscribe(user => this.saveLoginStatus(user));
        } else {
            this.errorMessage = "Invalid";
        }
    }

    loginUser(user: User) {
        this.user = user;
        this.authenticationService.login(user);

        this.submitted = true;

        this.router.navigate(['/dashboard']);

        //TODO: see if authentication service has a redirect URL (https://angular.io/docs/ts/latest/guide/router.html#!#can-activate-guard)
    }
}
