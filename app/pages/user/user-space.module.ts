/**
 * Created by stefania on 7/6/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';

import { ResourceService } from "../../services/resource.service";
import { userSpaceRouting } from "./user-space.routing";
import { MyCorporaComponent } from "./corpora/my-corpora.component";
import { MyServicesComponent } from "./components/my-services.component";
import { ConfirmationDialogComponent } from "../../shared/confirmation-dialog.component";

@NgModule({
    imports: [
        CommonModule,
        userSpaceRouting,
        ModalModule.forRoot(),
    ],
    declarations: [
        MyCorporaComponent,
        MyServicesComponent,
        ConfirmationDialogComponent
    ],
    providers: [
        ResourceService
    ]
})

export class UserSpaceModule {}