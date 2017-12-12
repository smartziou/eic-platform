/**
 * Created by stefania on 6/7/17.
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DevelopersComponent} from "./developers/developers.component";
import {FAQsComponent} from "./faqs/faqs.component";

const supportRoutes: Routes = [
    {
        path: "support/faqs",
        component: FAQsComponent
    },
    {
        path: "developers",
        component: DevelopersComponent
    }
];
export const supportRouting: ModuleWithProviders = RouterModule.forChild(supportRoutes);