/**
 * Created by stefania on 11/24/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpusRegistrationComponent } from "./corpus-registration.component";
import { SearchForPublicationsComponent } from "./search-for-publications.component";

const corpusRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/corpus',
        component: CorpusRegistrationComponent
    },
    {
        path: 'resourceRegistration/corpus/searchForPublications',
        component: SearchForPublicationsComponent
    },
    // {
    //     path: 'resourceRegistration/corpus/form',
    //     component: ComponentRegistrationFormComponent
    // }
];

export const corpusRegistrationRouting: ModuleWithProviders = RouterModule.forChild(corpusRegistrationRoutes);