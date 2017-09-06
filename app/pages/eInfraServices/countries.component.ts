import { Component} from '@angular/core';
import {MyGroup} from "../multiforms/my-group.interface";
import {Description, countriesDesc} from "./services.description";

@Component({
    selector: 'countriesInfo-form',
    template : `
        <div [formGroup]="group">
            <countryInfo-form [parentGroup]="group" [name]="'country'"></countryInfo-form>
        </div>

        <form-repeat-inline [component]="countriesComponent" [parentGroup]="group"
                            [name]="countries" [required]="true"
                            [description]="countriesDesc">
        </form-repeat-inline>
    `
})

export class countriesComponent extends MyGroup {

    readonly groupDefinition = {

    };

    readonly countriesDesc : Description = countriesDesc;
}