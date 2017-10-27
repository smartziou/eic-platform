/**
 * Created by pgl on 27/10/17.
 */

import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

declare var UIkit: any;

@Injectable()
export class HTTPWrapper extends Http {
    private static defaultOptions = new RequestOptions({headers: new Headers({"Content-Type": "application/json"})});
    private static base = process.env.API_ENDPOINT;

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return super.post(HTTPWrapper.base + url, JSON.stringify(body), Object.assign(HTTPWrapper.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }
    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return super.put(HTTPWrapper.base + url, JSON.stringify(body), Object.assign(HTTPWrapper.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }
    public get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(HTTPWrapper.base + url, Object.assign(HTTPWrapper.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }

    public handleError(error: Response) {
        UIkit.notification({
            message: JSON.parse(error.text()).error,
            status: "danger",
            pos: "top-center",
            timeout: 5000
        });
        console.error(error);
        return Observable.throw(error);
    }
}