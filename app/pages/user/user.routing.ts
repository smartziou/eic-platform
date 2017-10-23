/**
 * Created by stefania on 8/1/17.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./register/sign-up.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ActivateComponent} from "./activate/activate.component";
import {CanActivateViaAuthGuard} from "../../services/can-activate-auth-guard.service";

const userRoutes: Routes = [
    {
        path: 'signIn',
        component: LoginComponent,
    },
    {
        path: 'signUp',
        component: SignUpComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'activate/:id',
        component: ActivateComponent
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);