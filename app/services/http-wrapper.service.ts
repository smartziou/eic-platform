/**
 * Created by pgl on 27/10/17.
 */

import {Headers, Http, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

declare var UIkit: any;

@Injectable()
export class HTTPWrapper extends Http {
    private defaultOptions = new RequestOptions({headers: new Headers({"Content-Type": "application/json;charset=UTF-8"})});
    private base = process.env.API_ENDPOINT;

    constructor(backend: XHRBackend, options: RequestOptions, public http: Http) {
        super(backend, options)
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log(this.base);
        return super.post(this.base + url, JSON.stringify(body), Object.assign(this.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return super.put(this.base + url, JSON.stringify(body), Object.assign(this.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(this.base + url, Object.assign(this.defaultOptions, options)).map(res => res.json()).catch(this.handleError);
    }

    public handleError(error: Response) {
        UIkit.notification({
            message: JSON.parse(error.text()).error || "Severe server error",
            status: "danger",
            pos: "top-center",
            timeout: 5000
        });
        console.error(error);
        return Observable.throw(error);
    }
}