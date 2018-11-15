/**
 * Created by stefania on 9/6/16.
 */
import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BrowseResults} from "../domain/browse-results";
import {Event, RichService, Service, Vocabulary} from "../domain/eic-model";
import {SearchResults} from "../domain/search-results";
import {URLParameter} from "../domain/url-parameter";
import {AuthenticationService} from "./authentication.service";
import {HTTPWrapper} from "./http-wrapper.service";
@Injectable()
export class ResourceService {
    constructor(public http: HTTPWrapper, public authenticationService: AuthenticationService) {
    }

    getAll(resourceType: string) {
        return this.http.get(`/${resourceType}/all`);
    }

    getBy(resourceType: string, resourceField: string) {
        return this.http.get(`/${resourceType}/by/${resourceField}/`);
    }

    getSome(resourceType: string, ids: string[]) {
        return this.http.get(`/${resourceType}/byID/${ids.toString()}/`);
    }

    get(resourceType: string, id: string) {
        return this.http.get(`/${resourceType}/${id}/`);
    }

    static removeNulls(obj) {
        var isArray = obj instanceof Array;
        for (var k in obj) {
            if (obj[k] === null || obj[k] === "") {
                isArray ? obj.splice(k, 1) : delete obj[k];
            } else if (typeof obj[k] == "object") {
                if (typeof obj[k].value != "undefined" && typeof obj[k].lang != "undefined") {
                    if (obj[k].value == "" && obj[k].lang == "en") {
                        obj[k].lang = "";
                    }
                }
                ResourceService.removeNulls(obj[k]);
            }
            if (obj[k] instanceof Array && obj[k].length == 0) {
                delete obj[k];
            }
        }
    }

    search(urlParameters: URLParameter[]) {

        //TODO this 4 lines should be implemented in the backend
        let providerParameter: URLParameter = {
            key: 'providers',
            values: ['openaire']
        };
        urlParameters.push(providerParameter);

        let searchQuery = new URLSearchParams();
        for (let urlParameter of urlParameters) {
            for (let value of urlParameter.values) {
                searchQuery.append(urlParameter.key, value);
            }
        }
        searchQuery.delete("to");
        let questionMark = urlParameters.length > 0 ? "?" : "";
        // return this.http.get(`/service/all${questionMark}${searchQuery.toString()}`).map(res => <SearchResults> <any> res);
        return this.http.get(`/service/rich/all${questionMark}${searchQuery.toString()}`).map(res => <SearchResults<RichService>> <any> res);
    }

    // getVocabularies(type?: string) {
    //     return this.getVocabulariesRaw(type).map(e => e.results.reduce(type ? this.idToName : this.idToObject, {}));
    // }
    //
    // getVocabulariesRaw(type?: string) {
    //     return this.http.get(`/vocabulary/all?from=0&quantity=1000${type ? "&type=" + type : ""}`);
    // }

    getVocabularies(type?: string) {
        return this.http.get(`/vocabulary/all?from=0&quantity=1000${type ? "&type=" + type : ""}`);
    }

    getVocabulariesByType(type: string) {
        return this.http.get(`/vocabulary?type=${type}`);
    }

    getVocabulariesUsingGroupBy(type?: string) {
        return this.http.get(`/vocabulary/by/type`).filter(e => type ? e && e.type && e.type === type : true);
    }

    idToName(acc, v) {
        acc[v.id] = v.name;
        return acc;
    }

    idToObject(acc, v) {
        acc[v.id] = {"type": v.type, "name": v.name};
        return acc;
    }

    uniq(acc, v) {
        if (!acc.includes(v)) {
            acc.push(v);
        }
        return acc;
    }

    getServices() {
        return this.getBy("service", "id");
    }

    // getService(id: string) {
    //     return this.get("service", id);
    // }

    getService(id: string, version? : string) {
        return this.get("service", [id,version].join('/'));
    }

    getRichService(id: string, version? : string) {
        return this.get("service/rich", [id,version].join('/'));
    }

    getSelectedServices(ids: string[]) {
        return this.getSome("service", ids).map(res => <Service[]> <any> res);
    }

    getServicesByCategories() {
        return this.getBy("service", "category").map(res => <BrowseResults> <any> res);
    }

    getServicesOfferedByProvider(id: string): Observable<Service[]> {
        return this.search([{key: "quantity", values: ["100"]}, {key: "provider", values: [id]}]).map(res => Object.values(res.results));
    }

    randID() {
        let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    }

    randInt(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    randEl(arr: any[]) {
        return arr[this.randInt(0, arr.length)];
    }

    getFavourites(service: string): Observable<Event[]> {
        return this.getEvents(service, "favourite");
    }

    getInternalHits(service: string): Observable<Event[]> {
        return this.getEvents(service, "internal");
    }

    getExternalHits(service: string): Observable<Event[]> {
        return this.getEvents(service, "external");
    }

    getRatings(service: string): Observable<Event[]> {
        return this.getEvents(service, "rating");
    }

    getEvents(service: string, type: string): Observable<Event[]> {
        let valuables = {rating: [0, 5], favourite: [0, 1]};
        let ret: Event[] = [];
        for (let i = 0; i < this.randInt(0, 10); i++) {
            let ac: Event = {id: this.randID(), instant: this.randInt(1500000000, 1520000000), service, user: "pgl", type, value: null};
            if (Object.keys(valuables).indexOf(type) > 0) {
                ac.value = "" + this.randInt(valuables[type][0], valuables[type][1]);
            }
            ret.push(ac);
        }
        return Observable.from([ret]);
    }

    getVisitsForProvider(provider: string, type?: string) {
        return this.get(`stats/provider/${type || "visits"}`, provider);
    }

    getFavoritesForProvider(provider: string) {
        return this.get("provider/favourites", provider);
    }

    getRatingsForProvider(provider: string) {
        return this.get("provider/ratings", provider);
    }

    getVisitationPercentageForProvider(provider: string) {
        return this.get("provider/visitation", provider);
    }

    getPlacesForProvider(provider: string) {
        return this.getServicesOfferedByProvider(provider);
    }

    getVisitsForService(service: string, type?: string) {
        return this.get(`stats/service/${type || "visits"}`, service);
    }

    getFavouritesForService(service: string) {
        return this.get("stats/service/favourites", service);
    }

    getRatingsForService(service: string) {
        return this.get("service/ratings", service);
    }

    private randomInt(from: number, to: number) {
        return Math.floor(Math.random() * (to - from) + from);
    }

    groupServicesOfProviderPerPlace(id: string) {
        return this.getServicesOfferedByProvider(id).map(res => {
            let servicesGroupedByPlace = {};
            for (let service of res) {
                for (let place of service.places) {
                    if (servicesGroupedByPlace[place]) {
                        servicesGroupedByPlace[place].push(res);
                    } else {
                        servicesGroupedByPlace[place] = [];
                    }
                }
            }
            return servicesGroupedByPlace;
        });
    }

    getProvidersNames() {
        return this.getAll("provider").map(e => e.results.reduce(this.idToName, {}));
    }

    getProviders() {
        return this.getAll("provider");
    }

    getMyServiceProviders() {
        return this.http.get('/provider/getMyServiceProviders');
    }

    getEU() {
        return this.http.get("/vocabulary/countries/EU");
    }

    getWW() {
        return this.http.get("/vocabulary/countries/WW");
    }

    //this should be somewhere else, I think
    expandRegion(places, eu, ww) {
        let iEU = places.indexOf("EU");
        if (iEU > -1) {
            places.splice(iEU, 1);
            places.push(...eu);
        }
        let iWW = places.indexOf("WW");
        if (iWW > -1) {
            places.splice(iWW, 1);
            places.push(...ww);
        }
        return places;
    }

    getExternalsForProvider(provider: string) {
        return this.getVisitsForProvider(provider, "externals");
    }

    getExternalsForService(service: string, type?: string) {
        return this.getVisitsForService(service, "externals");
    }

    getInternalsForService(service: string, type?: string) {
        return this.getVisitsForService(service, "internals");
    }

    getInternalsForProvider(provider: string) {
        return this.getVisitsForProvider(provider, "internals");
    }

    activateUserAccount(id: any) {
        return this.http.get(`/user/activate/${id}`);
    }

    uploadService(service: Service, shouldPut: boolean) {
        return this.http[shouldPut ? "put" : "post"]("/service", service).map(res => <Service> <any> res);
    }

    recordHit(id: any, type: any, value: any) {
        let hit = new Event();
        hit.service = id;
        hit.instant = Date.now();
        hit.user = (this.authenticationService.user || {id: ""}).id;
        hit.type = type;
        let isVisit = ["internal", "external"].indexOf(hit.type) > 0;
        if (( isVisit && sessionStorage.getItem(type + "-" + id) !== "aye") || !isVisit) {
            sessionStorage.setItem(type + "-" + id, "aye");
            return this.http.post("/event", hit);
        } else {
            return Observable.from(["k"]);
        }
    }
}