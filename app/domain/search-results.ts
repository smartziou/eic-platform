/**
 * Created by stefania on 9/9/16.
 */
import { Results } from "./results";
import { Facet } from "./facet";
    
export class SearchResults {

    from: number;
    to: number;
    total: number;
    
    results: Results;
    facets: Facet[];
}