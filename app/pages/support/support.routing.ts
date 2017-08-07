/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FAQsComponent } from "./faqs/faqs.component";

const supportRoutes: Routes = [
    {
        path: 'support/faqs',
        component: FAQsComponent,
    },
];

export const supportRouting: ModuleWithProviders = RouterModule.forChild(supportRoutes);