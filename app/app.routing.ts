/**
 * Created by stefania on 8/29/16.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {CompareServicesComponent} from "./pages/compare/compare-services.component";
import {BrowseCategoriesComponent} from "./pages/browsecategories/browse-categories.component";
import {ServiceUploadComponent} from "./pages/eInfraServices/service-upload.component";
import {ServiceEditComponent} from "./pages/eInfraServices/service-edit.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'compare',
        component: CompareServicesComponent
    },
    {
        path: 'browseCategories',
        component: BrowseCategoriesComponent
    },
    {
        path: 'upload',
        component: ServiceUploadComponent
    },
    {
        path: 'edit/:id',
        component: ServiceEditComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);