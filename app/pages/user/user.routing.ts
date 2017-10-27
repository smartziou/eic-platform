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
import {CanActivateViaPubGuard} from "../../services/can-activate-pub-guard.service";

const userRoutes: Routes = [
    {
        path: 'signIn',
        component: LoginComponent,
        canActivate: [CanActivateViaPubGuard]
    },
    {
        path: 'signUp',
        component: SignUpComponent,
        canActivate: [CanActivateViaPubGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'activate/:id',
        component: ActivateComponent
        canActivate: [CanActivateViaPubGuard]
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);