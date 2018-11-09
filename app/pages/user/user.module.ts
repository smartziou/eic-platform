import {CommonModule} from "@angular/common";
/**
 * Created by stefania on 8/1/17.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";
import {SharedModule} from "../../shared/shared.module";
import {userRouting} from "./user.routing";

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        userRouting,
        ReusableComponentsModule
    ],
})
export class UserModule {
}