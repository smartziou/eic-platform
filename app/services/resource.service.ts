/**
 * Created by stefania on 9/6/16.
 */
import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Response} from "@angular/http";
import {URLParameter} from "../domain/url-parameter";
import {SearchResults} from "../domain/search-results";
import {Access, Service} from "../domain/eic-model";
import {BrowseResults} from "../domain/browse-results";
import {HTTPWrapper} from "./http-wrapper.service";

@Injectable()
export class ResourceService {

    constructor(private http: HTTPWrapper) {
    }

    search(urlParameters: URLParameter[]) {
        let searchQuery = new URLSearchParams();
        for (let urlParameter of urlParameters) {
            for (let value of urlParameter.values) {
                searchQuery.append(urlParameter.key, value);
            }
        }
        searchQuery.delete('to');

        let questionMark = urlParameters.length > 0 ? '?' : '';

        return this.http.get(`/service/all${questionMark}${searchQuery.toString()}`).map(res => <SearchResults> res);
    }

    getVocabularies(type?: string) {
        return this.http.get(`/vocabulary/all?from=0&quantity=10000${type ? "&type=" + type : ""}`).map(e => e.results.reduce(this.getActualResult, {}));
    }

    getActualResult(accumulator, value) {
        accumulator[value.resource.id] = value.resource.name;
        return accumulator;
    }

    getServices() {
        return this.http.get("/service/by/service_id").map(res => <Service> res);
    }

    getService(id: string) {
        return this.http.get(`/service/${id}/`).map(res => <Service> res);
    }

    getSelectedServices(ids: string[]) {
        return this.http.get(`/service/some/${ids.toString()}/`).map(res => <Service[]> res);
    }

    getServicesByCategories() {
        return this.http.get("/service/by/category").map(res => <BrowseResults> res);
    }

    getProviders() {
        return this.http.get("/provider/all").map(e => e.results.reduce(this.getActualResult, {}));
    }

    activateUserAccount(id: any) {
        return this.http.get(`/user/activate/${id}`);
    }

    uploadService(service: Service, shouldPut: boolean) {
        return this.http[shouldPut ? "put" : "post"]("/service", service).map(res => <Service> res);
    }

    static removeNulls(obj) {
        var isArray = obj instanceof Array;
        for (var k in obj) {
            if (obj[k] === null || obj[k] === '') isArray ? obj.splice(k, 1) : delete obj[k];
            else if (typeof obj[k] == "object") {
                if (typeof obj[k].value != 'undefined' && typeof obj[k].lang != 'undefined')
                    if (obj[k].value == '' && obj[k].lang == 'en')
                        obj[k].lang = '';
                ResourceService.removeNulls(obj[k]);
            }
            if (obj[k] instanceof Array && obj[k].length == 0) delete obj[k];
        }
    }

    recordHit(id: any, type: any) {
        if (sessionStorage.getItem("internal-" + id) !== "aye") {
            let hit = new Access();
            hit.serviceID = id;
            hit.type = type;
            sessionStorage.setItem("internal-" + id, "aye");
            return this.http.post("/access/add", hit);
        }
    }
}