/**
 * Created by stefania on 11/24/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { URLParameter } from "../domain/url-parameter";
import { PublicationSearchResults } from "../domain/publications-search-results";

@Injectable()
export class ContentConnectorService {

    constructor (private http: Http) {}

    private _contentConnectorSearchUrl = 'http://83.212.101.141:8888/content-connector-service/content/browse/';

    search(urlParameters: URLParameter[]) {

        var postBody = '{}';

        var keywordString = '';
        var paramsString = '\"params\":{';

        var foundParams = false;

        for(let urlParameter of urlParameters) {

            if(urlParameter.key === 'query') {
                keywordString = '\"keyword\":\"' + urlParameter.values[0] + '\"';
            } else {
                foundParams = true;
                var valuesCounter = 0;
                paramsString += '\"' + urlParameter.key + '\":[';
                for(let value of urlParameter.values) {
                    if(valuesCounter!=0)
                        paramsString += ',';
                    paramsString += '\"' + value + '\"';
                    valuesCounter++;
                }
                paramsString += ']';
            }

        }

        paramsString += '}';

        if(keywordString != '' || foundParams) {
            postBody = '{';
            if(keywordString!='')
                postBody += keywordString;
            if(foundParams) {
                if(keywordString!='')
                    postBody += ',' + paramsString;
                else
                    postBody += paramsString;
            }
            postBody += '}';
        }

        console.log(postBody);

        // {"keyword":"blah","params":{"year":["2012"],"language":["english","somalian"]},"facets":["language","year"],"from":0,"to":0}

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this._contentConnectorSearchUrl, postBody, options)
            .map(res => <PublicationSearchResults> res.json())
            .catch(this.handleError);
        
        
        // return this.http.get(this._contentConnectorSearchUrl + '?facets=licence,year,language')
        //     .map(res => <PublicationSearchResults> res.json())
        //     .catch(this.handleError);
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