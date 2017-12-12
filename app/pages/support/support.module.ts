/**
 * Created by stefania on 6/7/17.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FAQService} from "../../services/faq.service";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";
import {SharedModule} from "../../shared/shared.module";
import {DevelopersComponent} from "./developers/developers.component";
import {FAQsComponent} from "./faqs/faqs.component";
import {supportRouting} from "./support.routing";

@NgModule({
    imports: [
        CommonModule,
        supportRouting,
        ReusableComponentsModule,
        SharedModule,

    ],
    declarations: [
        FAQsComponent,
        DevelopersComponent
    ],
    providers: [
        FAQService
    ]
})
export class SupportModule {
}