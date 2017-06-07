/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesComponent } from "./policies/policies.component";
import { FAQsComponent } from "./faqs/faqs.component";
import { AskAQuestionComponent } from "./askquestion/ask-a-question.component";

const supportRoutes: Routes = [
    {
        path: 'support/policies',
        component: PoliciesComponent,
    },
    {
        path: 'support/faq',
        component: FAQsComponent,
    },
    {
        path: 'support/askQuestion',
        component: AskAQuestionComponent,
    },
];

export const supportRouting: ModuleWithProviders = RouterModule.forChild(supportRoutes);