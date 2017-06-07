/**
 * Created by stefania on 8/29/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from "./pages/search/search.component";
import { LoginComponent } from "./pages/user/signin/login.component";
import { RegisterComponent } from "./pages/user/register/register.component";
import { EditProfileComponent } from "./pages/user/editprofile/edit-profile.component";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'editProfile',
        component: EditProfileComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);