/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentCreationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'component-creation-info',
    templateUrl: './component-creation-info.component.html',
})

export class ComponentCreationInfoComponent {
    @Input() componentCreationInfo: ComponentCreationInfo;
}