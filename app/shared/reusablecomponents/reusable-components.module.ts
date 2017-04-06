/**
 * Created by stefania on 4/6/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { ReadMoreComponent } from "./read-more.component";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        ReadMoreComponent
    ],
    exports: [
        ReadMoreComponent
    ]
})

export class ReusableComponentsModule {}