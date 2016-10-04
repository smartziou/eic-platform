/**
 * Created by stefania on 8/30/16.
 */
import { Injectable } from '@angular/core';
import { User } from "./../domain/user";

@Injectable()
export class AuthenticationService {

    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(user: User) {
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
    }

    logout() {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
    }

    isUserLoggedIn(){
        if (localStorage.getItem("user") === null){
            return false;
        }
        return true;
    }

    getLoggedInUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}