/**
 * Created by stefania on 8/29/16.
 */

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceEditComponent } from "./pages/eInfraServices/service-edit.component";
import { ServiceUploadComponent } from "./pages/eInfraServices/service-upload.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";
import { ServiceLandingPageComponent } from "./pages/landingpages/service/service-landing-page.component";

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
        path: "service/:id",
        component: ServiceLandingPageComponent
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
