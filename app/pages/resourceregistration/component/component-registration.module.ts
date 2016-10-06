/**
 * Created by stefania on 10/5/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ResourceService } from "../../../services/resource.service";
import { componentRegistrationRouting } from "./component-registration.routing";
import { ComponentRegistrationComponent } from "./component-registration.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        componentRegistrationRouting
    ],
    declarations: [
        ComponentRegistrationComponent
    ],
    providers: [
        ResourceService
    ]
})

export class ComponentRegistrationModule {}