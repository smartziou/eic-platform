/**
 * Created by stefania on 11/16/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ResourceService } from "../../services/resource.service";
import { landingPageRouting } from "./landing-page.routing";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { ServiceLandingPageComponent } from "./service/service-landing-page.component";
import { StarRatingModule } from "angular-star-rating";

@NgModule({
    imports: [
        CommonModule,
        landingPageRouting,
        ReusableComponentsModule,
        StarRatingModule.forRoot()
    ],
    declarations: [
        ServiceLandingPageComponent,
    ],
    providers: [
        ResourceService
    ]
})

export class LandingPageModule {}