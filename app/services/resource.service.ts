/**
 * Created by stefania on 9/6/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Component as OMTDComponent, Corpus as OMTDCorpus, Order, LanguageDescription, Lexical} from "../domain/openminted-model";
import { URLParameter } from "../domain/url-parameter";
import { SearchResults } from "../domain/search-results";
import { Resource } from "../domain/resource";

@Injectable()
export class ResourceService {

    private endpoint = process.env.API_ENDPOINT + ':' + process.env.API_PORT + process.env.API_PATH ;

    constructor (private http: Http) {
        console.log(this.endpoint);
    }

    private _searchUrl = this.endpoint + '/request/';
    private _resourcesUrl = this.endpoint + '/request/';
    private _uploadUrl = this.endpoint + '/resources/';
    private _uploadZip = this.endpoint + "/request/corpus/upload";
    
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

    searchForApplications(urlParameters: URLParameter[]) {

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

    searchForCorpora(urlParameters: URLParameter[]) {

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

        if(urlParameters.length==0) {
            searchQuery += '?resourceType=corpus';
        } else {
            searchQuery += '&resourceType=corpus';
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

    getCorpora() {
        return this.http.get(this._resourcesUrl + "corpus/all")
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError);
    }

    getComponent(id: string) {
        return this.http.get(this._resourcesUrl + "component/" + id)
            .map(res => <OMTDComponent> res.json())
            .catch(this.handleError);
    }

    getComponents() {
        return this.http.get(this._resourcesUrl + "component/all")
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
            .map(res => <any> res.json())
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
        }
    }

    uploadCorpus(corpus: OMTDCorpus) {

        console.log(JSON.stringify(corpus));

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        ResourceService.removeNulls(corpus);
        return this.http.post(this._searchUrl + 'corpus', JSON.stringify(corpus), options)
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

    uploadComponent(component: OMTDComponent) {

        console.log(JSON.stringify(component));

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        ResourceService.removeNulls(component);
        return this.http.post(this._searchUrl + 'component', JSON.stringify(component), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    public corpusDownloadURL(id : string) : string {
        return this._resourcesUrl + '/corpus/download?archiveId=' + id;
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