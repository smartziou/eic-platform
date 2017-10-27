/**
 * Created by stefania on 8/30/16.
 */

import {Injectable} from "@angular/core";
import {User} from "../domain/eic-model";
import {Observable} from "rxjs/Rx";
import {HTTPWrapper} from "./http-wrapper.service";

@Injectable()
export class UserService {
    constructor(private http: HTTPWrapper) {
    }

    addFavourite(serviceID: string, userID: string): Observable<any> {
        return this.http.post("/user/addFavourite", {userID,serviceID});
    }

    loginUser(email: string, password: string): Observable<User> {
        return this.http.post("/user/login", {email, password});
    }

    registerUser(user: User): Observable<User> {
        return this.http.post("/user/register", user);
    }
}