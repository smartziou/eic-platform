/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";

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
        component: ComponentRegistrationUsingFormComponent
    }
];

export const componentRegistrationRouting: ModuleWithProviders = RouterModule.forChild(componentRegistrationRoutes);