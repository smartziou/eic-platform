/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationFormComponent } from "./component-registration-form.component";

const componentRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/component',
        component: ComponentRegistrationComponent
    },
    {
        path: 'resourceRegistration/component/xml',
        component: ComponentRegistrationXMLComponent
    },
    {
        path: 'resourceRegistration/component/form',
        component: ComponentRegistrationFormComponent
    }
];

export const componentRegistrationRouting: ModuleWithProviders = RouterModule.forChild(componentRegistrationRoutes);