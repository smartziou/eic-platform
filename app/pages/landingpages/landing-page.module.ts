import {CommonModule} from "@angular/common";
/**
 * Created by stefania on 11/16/16.
 */
import {NgModule} from "@angular/core";
import {StarRatingModule} from "angular-star-rating";
import {ResourceService} from "../../services/resource.service";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";
import {landingPageRouting} from "./landing-page.routing";
import {ServiceLandingPageComponent} from "./service/service-landing-page.component";

@NgModule({
    imports: [
        CommonModule,
        landingPageRouting,
        ReusableComponentsModule,
        StarRatingModule.forRoot()
    ],
    declarations: [
        ServiceLandingPageComponent
    ],
    providers: [
        ResourceService
    ]
})
export class LandingPageModule {
}