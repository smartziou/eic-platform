import {CommonModule} from "@angular/common";
/**
 * Created by stefania on 6/7/17.
 */
import {NgModule} from "@angular/core";
import {FAQService} from "../../services/faq.service";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";
import {FAQsComponent} from "./faqs/faqs.component";
import {supportRouting} from "./support.routing";

@NgModule({
    imports: [
        CommonModule,
        supportRouting,
        ReusableComponentsModule
    ],
    declarations: [
        FAQsComponent
    ],
    providers: [
        FAQService
    ]
})
export class SupportModule {
}