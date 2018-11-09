/**
 * Created by stefania on 8/1/17.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CanActivateViaAuthGuard} from "../../services/can-activate-auth-guard.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ServiceDashboardComponent} from "./dashboard/service-dashboard.component";

const userRoutes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: "dashboard/:id",
        component: ServiceDashboardComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
];
export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);