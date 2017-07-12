/**
 * Created by stefania on 6/7/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { supportRouting } from "./support.routing";
import { PoliciesComponent } from "./policies/policies.component";
import { FAQsComponent } from "./faqs/faqs.component";
import { AskAQuestionComponent } from "./askquestion/ask-a-question.component";
import { FAQService } from "../../services/faq.service";

    
@NgModule({
    imports: [
        CommonModule,
        supportRouting,
    ],
    declarations: [
        PoliciesComponent,
        FAQsComponent,
        AskAQuestionComponent
    ],
    providers: [
        FAQService
    ]
})

export class SupportModule {}