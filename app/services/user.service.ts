/**
 * Created by stefania on 8/30/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './../domain/user';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor (private http: Http) {}

    private _usersUrl = 'http://83.212.98.33:8080/omtd-registry/user/';

    loginUser(username: string, password: string): Observable<User> {

        return this.http.get(this._usersUrl + 'login/' + username + '/' + password)
            .map(res => <User> res.json())
            // .map(this.extractData)
            .catch(this.handleError);
    }

    registerUser(user: User): Observable<User> {

        let body = JSON.stringify({ user });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._usersUrl + 'register/', body, options)
            .map(res => <User> res.json())
            // .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}