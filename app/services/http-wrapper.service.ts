import {Injectable} from "@angular/core";
/**
 * Created by pgl on 27/10/17.
 */
import {Headers, Http, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from "@angular/http";
import {Observable} from "rxjs/Rx";

declare var UIkit: any;

@Injectable()
export class HTTPWrapper extends Http {
    private base = process.env.API_ENDPOINT;

    constructor(backend: XHRBackend) {
        super(backend, new RequestOptions({headers: new Headers({"Content-Type": "application/json;charset=UTF-8"})}));
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return super.post(this.base + url, this.parse(body), options).map(this.getJSON).catch(this.handleError);
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return super.put(this.base + url, this.parse(body), options).map(this.getJSON).catch(this.handleError);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(this.base + url, options).map(this.getJSON).catch(this.handleError);
    }

    public handleError(error: Response) {
        UIkit.notification({
            message: JSON.parse(error.text()).error || "Severe server error",
            status: "danger",
            pos: "top-center",
            timeout: 5000
        });
        return Observable.throw(error);
    }

    private getJSON(response: Response): any {
        return response.json();
    }

    private parse(request: any): any {
        try {
            return JSON.parse(request);
        } catch (e) {
            return request;
        }
    }
}