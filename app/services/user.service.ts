/**
 * Created by stefania on 8/30/16.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {User} from "../domain/eic-model";
import {Observable} from "rxjs/Rx";
import * as util from "util";

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    loginUser(email: string, password: string): Observable<User> {
        let args = new RequestOptions({headers: new Headers({"Content-Type": "application/json"})});
        return this.http.post(process.env.API_ENDPOINT + "/user/login", JSON.stringify({email, password}), args)
            .map(res => <User> res.json())
            // .map(this.extractData)
            .catch(this.handleError);
    }

    registerUser(user: User): Observable<User> {
        let args = new RequestOptions({headers: new Headers({"Content-Type": "application/json"})});
        return this.http.post(process.env.API_ENDPOINT + "/user/register", user, args)
            .map(res => <User> res.json())
            .map(console.log)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}