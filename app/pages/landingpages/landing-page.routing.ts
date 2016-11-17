/**
 * Created by stefania on 11/16/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLandingPageComponent } from "./component/component-landing-page.component";
import { CorpusLandingPageComponent } from "./corpus/corpus-landing-page.component";

const landingPageRoutes: Routes = [
    {
        path: 'landingPage/component/:id',
        component: ComponentLandingPageComponent,
    },
    {
        path: 'landingPage/corpus/:id',
        component: CorpusLandingPageComponent,
    },
];

export const landingPageRouting: ModuleWithProviders = RouterModule.forChild(landingPageRoutes);