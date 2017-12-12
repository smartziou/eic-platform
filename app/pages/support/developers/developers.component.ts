/**
 * Created by pgl on 12/12/17.
 */

import {Component} from "@angular/core";

@Component({
    selector: "developers",
    templateUrl: "./developers.component.html",
    styleUrls: ["./developers.component.css"]
})
export class DevelopersComponent {

    //use this for now
    getUI() {
        return `${process.env.API_ENDPOINT}/swagger-ui.html`;
    }

    //this needs consuming code/libraries; too much effort, not agile enough
    getJSON() {
        return `${process.env.API_ENDPOINT}/v2/api-docs`;
    }
}
