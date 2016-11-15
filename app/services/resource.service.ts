/**
 * Created by stefania on 9/6/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { OMTDComponent, OMTDCorpus} from "../domain/openminted-model";
import { URLParameter } from "../domain/url-parameter";
import { SearchResults } from "../domain/search-results";

@Injectable()
export class ResourceService {

    constructor (private http: Http) {}

    private _searchUrl = 'http://194.177.192.227:8888/omtd-registry/request/';
    private _resourcesUrl = 'http://194.177.192.227:8888/omtd-registry/request/';
    // private _searchUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    // private _resourcesUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    
    search(urlParameters: URLParameter[]) {

        var searchQuery = '';
        var counter = 0;
        for (let urlParameter of urlParameters) {
            
            if(counter === 0) 
                searchQuery += '?';
            
            if(urlParameter.key === 'query') {
                searchQuery += 'keyword=' + urlParameter.values[0];
                
            } else {
                var valuesCounter = 0;
                for(let value of urlParameter.values) {
                    if(valuesCounter!=0)
                        searchQuery += '&';
                    searchQuery += urlParameter.key + '=' + value;
                    valuesCounter++;
                }
            }
            
            if(counter != urlParameters.length-1) 
                searchQuery += '&';
            
            counter++;
        }
        
        return this.http.get(this._searchUrl + searchQuery)
            .map(res => <SearchResults> res.json())
            .catch(this.handleError);
    }

    getCorpus(id: string) {
        return this.http.get(this._resourcesUrl + "corpus/" + id)
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError);
    }

    getComponent(id: string) {
        return this.http.get(this._resourcesUrl + "component/" + id)
            .map(res => <OMTDComponent> res.json())
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