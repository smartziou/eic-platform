/**
 * Created by stefania on 9/6/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { URLParameter } from "../domain/url-parameter";
import { SearchResults } from "../domain/search-results";
import { Service } from "../domain/eic-model";

@Injectable()
export class ResourceService {

    private endpoint = process.env.API_ENDPOINT;

    constructor (private http: Http) {
        console.log(this.endpoint);
    }

    private _searchUrl = this.endpoint + '/';
    
    search(urlParameters: URLParameter[]) {


        let searchQuery = new URLSearchParams();
        for (let urlParameter of urlParameters) {
            for(let value of urlParameter.values) {
                searchQuery.append(urlParameter.key, value);
            }
        }
        searchQuery.delete('to');

        let questionMark = urlParameters.length>0?'?':'';

        // var searchQuery = '';
        // var counter = 0;
        // for (let urlParameter of urlParameters) {
        //
        //     if(counter === 0)
        //         searchQuery += '?';
        //
        //     if(urlParameter.key === 'query') {
        //         searchQuery += 'keyword=' + urlParameter.values[0];
        //     } else {
        //         var valuesCounter = 0;
        //         for(let value of urlParameter.values) {
        //             if(valuesCounter!=0)
        //                 searchQuery += '&';
        //             searchQuery += urlParameter.key + '=' + value;
        //             valuesCounter++;
        //         }
        //     }
        //
        //     if(counter != urlParameters.length-1)
        //         searchQuery += '&';
        //
        //     counter++;
        // }
        // `${this._searchUrl}service${questionMark}${searchQuery}`;

        return this.http.get(`${this._searchUrl}service/all${questionMark}${searchQuery.toString()}`)
            .map(res => <SearchResults> res.json())
            .catch(this.handleError);
    }

    getService(id: string) {
        return this.http.get(`${this._searchUrl}service/${id}/`)
            .map(res => <Service> res.json())
            .catch(this.handleError);
    }

    getSelectedServices(ids: string[]) {
        return this.http.get(`${this._searchUrl}service/some/${ids.toString()}/`)
            .map(res => <Service[]> res.json())
            .catch(this.handleError);
    }

    static removeNulls(obj){
        var isArray = obj instanceof Array;
        for (var k in obj){
            if (obj[k]===null || obj[k]==='') isArray ? obj.splice(k,1) : delete obj[k];
            else if (typeof obj[k]=="object") {
                if (typeof obj[k].value != 'undefined' && typeof obj[k].lang != 'undefined')
                    if (obj[k].value == '' && obj[k].lang=='en')
                        obj[k].lang = '';
                ResourceService.removeNulls(obj[k]);
            }
            if(obj[k] instanceof Array && obj[k].length == 0) delete obj[k];
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = "";
        console.log(error);
        if (error instanceof Response) {
            const body = error.text() || '';
            //const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
        }
        return Observable.throw(errMsg);
    }
}