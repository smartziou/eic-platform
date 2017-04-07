/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentDistributionInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'component-distribution-info',
    templateUrl: './component-distribution-info.component.html',
})

export class ComponentDistributionInfoComponent {
    @Input() componentDistributionInfo: ComponentDistributionInfo;
}