/**
 * Created by pgl on 28/08/17.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {

    user: string = null;

    constructor() {

    }
}