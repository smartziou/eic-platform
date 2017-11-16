/**
 * Created by stefania on 8/29/16.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowseCategoriesComponent} from "./pages/browsecategories/browse-categories.component";
import {CompareServicesComponent} from "./pages/compare/compare-services.component";
import {ServiceEditComponent} from "./pages/eInfraServices/service-edit.component";
import {ServiceUploadComponent} from "./pages/eInfraServices/service-upload.component";
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {CanActivateViaAuthGuard} from "./services/can-activate-auth-guard.service";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "search",
        component: SearchComponent
    },
    {
        path: "compare",
        component: CompareServicesComponent
    },
    {
        path: "browseCategories",
        component: BrowseCategoriesComponent
    },
    {
        path: "upload",
        component: ServiceUploadComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: "edit/:id",
        component: ServiceEditComponent,
        canActivate: [CanActivateViaAuthGuard]
    }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);