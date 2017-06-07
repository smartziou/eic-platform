/**
 * Created by stefania on 6/7/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { actionsRouting } from "./actions.routing";
import { BuildAWorkflowComponent } from "./buildworkflow/build-a-workflow.component";
import { RunApplicationComponent } from "./runapplication/run-application.component";


@NgModule({
    imports: [
        CommonModule,
        actionsRouting,
    ],
    declarations: [
        BuildAWorkflowComponent,
        RunApplicationComponent,
    ],
})

export class ActionsModule {}