/**
 * Created by stefania on 9/6/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {OMTDComponent, OMTDCorpus, Order, LanguageDescription, Lexical, Model} from "../domain/openminted-model";
import { URLParameter } from "../domain/url-parameter";
import { SearchResults } from "../domain/search-results";
import { Resource } from "../domain/resource";

@Injectable()
export class ResourceService {

    constructor (private http: Http) {}

    private _searchUrl = 'http://83.212.101.85:8080/omtd-registry/request/';
    private _resourcesUrl = 'http://83.212.101.85:8080/omtd-registry/request/';
    private _uploadUrl = 'http://83.212.101.85:8080/omtd-registry/resources/';
    private _uploadZip = "http://83.212.101.85:8080/omtd-registry/request/corpus/upload";
    // private _searchUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    // private _resourcesUrl = 'http://83.212.98.33:8080/omtd-registry/request/';
    
    search(urlParameters: URLParameter[]) {

        var advanced:boolean = false;

        var searchQuery = '';
        var counter = 0;
        for (let urlParameter of urlParameters) {
            
            if(counter === 0) 
                searchQuery += '?';
            
            if(urlParameter.key === 'query') {
                searchQuery += 'keyword=' + urlParameter.values[0];
            } else if(urlParameter.key === 'advanced') {
                if(urlParameter.values[0]=='true')
                    advanced = true;
                else
                    advanced = false;
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

        if(urlParameters.length==0) {
            searchQuery += '?advanced=' + advanced;
        } else {
            searchQuery += '&advanced=' + advanced;
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

    getLanguageDescription(id: string) {
        return this.http.get(this._resourcesUrl + "language/" + id)
            .map(res => <LanguageDescription> res.json())
            .catch(this.handleError);
    }

    getLexicalConceptual(id: string) {
        return this.http.get(this._resourcesUrl + "lexical/" + id)
            .map(res => <Lexical> res.json())
            .catch(this.handleError);
    }

    getModel(id: string) {
        return this.http.get(this._resourcesUrl + "model/" + id)
            .map(res => <Model> res.json())
            .catch(this.handleError);
    }

    getXML(url : string) {
        return this.http.get(url)
            .map(res => <string> JSON.stringify(res.json()))
            .catch(this.handleError);
    }

    registerComponent(component: Resource) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        console.log(JSON.stringify(component));
        return this.http.post(this._uploadUrl, JSON.stringify(component), options)
            .map(res => <Resource> res.json())
            .catch(this.handleError);
    }

    uploadCorpus(corpus: OMTDCorpus) {

        console.log(JSON.stringify(corpus));

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this._searchUrl + '/corpus', JSON.stringify(corpus), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    uploadZip(name : string,file : File) {
        let formBody : FormData = new FormData();
        formBody.append('filename',name);
        formBody.append('file',file);
        return this.http.post(this._uploadZip,formBody)
            .map(res => this.corpusDownloadURL(res.text()))
            .catch(this.handleError);
    }

    public corpusDownloadURL(id : string) : string {
        return this._uploadUrl + '/corpus/download?archiveId=' + id;
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