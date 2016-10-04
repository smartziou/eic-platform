/**
 * Created by stefania on 7/5/16.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchQuery } from "../../domain/search-query";

@Component({
    selector: 'home',
    templateUrl: 'app/pages/home/home.component.html',
    styleUrls: ['app/pages/home/home.component.css'],
})

export class HomeComponent {

    public searchForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router) {
        this.searchForm = fb.group({
            "query": [""],
        });
    }

    onSubmit(searchValue: SearchQuery) {
        this.router.navigate(['/search', { query: searchValue.query}]);
    }
}