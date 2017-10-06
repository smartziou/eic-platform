/**
 * Created by stefania on 9/9/16.
 */
import {Facet} from "./facet";

export class SearchResults {

    from: number;
    to: number;
    total: number;

    results: Order<any>[];
    facets: Facet[];
}

export class Order<T> {
    order: number;
    resource: T;
}