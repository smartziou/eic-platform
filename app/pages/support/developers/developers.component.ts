/**
 * Created by pgl on 12/12/17.
 */

import {Component, OnInit} from "@angular/core";
import * as util from "util";

@Component({
    selector: "developers",
    templateUrl: "./developers.component.html",
    styleUrls: ["./developers.component.css"]
})
export class DevelopersComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

    getModifiedURL(p) {
        return util.format("%s//%s%s", window.location.protocol, window.location.hostname, p != null ? ":" + p : "");
    }
}