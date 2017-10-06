/**
 * Created by stefania on 8/1/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {userRouting} from "./user.routing";
import {ReusableComponentsModule} from "../../shared/reusablecomponents/reusable-components.module";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./register/sign-up.component";


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        userRouting,
        ReusableComponentsModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
})

export class UserModule {}