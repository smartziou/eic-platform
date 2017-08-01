/**
 * Created by stefania on 8/1/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./register/sign-up.component";

const userRoutes: Routes = [
    {
        path: 'signIn',
        component: LoginComponent,
    },
    {
        path: 'signUp',
        component: SignUpComponent,
    },
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);