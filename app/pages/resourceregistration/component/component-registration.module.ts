/**
 * Created by stefania on 10/5/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { ResourceService } from "../../../services/resource.service";
import { componentRegistrationRouting } from "./component-registration.routing";
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationFormComponent } from "./component-registration-form.component";
import { AccordionModule, TypeaheadModule } from "ngx-bootstrap";
import { ResourceRegistrationModule } from "../resource-registration.module";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";
import { ReusableComponentsModule } from "../../../shared/reusablecomponents/reusable-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        componentRegistrationRouting,
        AccordionModule.forRoot(),
        TypeaheadModule.forRoot(),
        ResourceRegistrationModule,
        ReusableComponentsModule
    ],
    declarations: [
        ComponentRegistrationComponent,
        ComponentRegistrationXMLComponent, 
        ComponentRegistrationFormComponent,
        ComponentRegistrationUsingFormComponent
    ],
    providers: [
        ResourceService
    ]
})

export class ComponentRegistrationModule {}