/**
 * Created by stefania on 7/5/16.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchQuery } from "../../domain/search-query";
import { Service } from "../../domain/eic-model";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent {

    public searchForm: FormGroup;

    private services: Service[];

    constructor(fb: FormBuilder, private router: Router) {
        this.searchForm = fb.group({
            "query": [""],
        });
    }

    onSubmit(searchValue: SearchQuery) {
        this.router.navigate(['/search', { query: searchValue.query}]);
    }

    gotoDetail(id: string) {
        this.router.navigate(['/landingPage/service' + '/', btoa(id)]);
    }
}