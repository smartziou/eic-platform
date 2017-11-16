/**
 * Created by stefania on 8/30/16.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "../domain/eic-model";
import {HTTPWrapper} from "./http-wrapper.service";

@Injectable()
export class UserService {
    user: User;

    constructor(private http: HTTPWrapper) {
    }

    addFavourite(serviceID: string, userID: string): Observable<any> {
        return this.http.post("/user/addFavourite", {userID, serviceID});
    }

    loginUser(email: string, password: string): Observable<any> {
        return this.http.post("/user/login", {email, password}).map(
            user => {
                this.user = user;
            }
        );
    }

    registerUser(user: User): Observable<any> {
        return this.http.post("/user/register", user);
    }
}