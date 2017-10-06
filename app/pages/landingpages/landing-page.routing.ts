/**
 * Created by stefania on 11/16/16.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ServiceLandingPageComponent} from "./service/service-landing-page.component";

const landingPageRoutes: Routes = [
    {
        path: 'landingPage/service/:id',
        component: ServiceLandingPageComponent,
    }
];

export const landingPageRouting: ModuleWithProviders = RouterModule.forChild(landingPageRoutes);