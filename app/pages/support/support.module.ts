/**
 * Created by stefania on 6/7/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {supportRouting} from "./support.routing";
import {FAQsComponent} from "./faqs/faqs.component";
import {FAQService} from "../../services/faq.service";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";


@NgModule({
    imports: [
        CommonModule,
        supportRouting,
        ReusableComponentsModule
    ],
    declarations: [
        FAQsComponent,
    ],
    providers: [
        FAQService
    ]
})

export class SupportModule {}