/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { RightsInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'rights-info',
    templateUrl: './rights-info.component.html',
})

export class RightsInfoComponent {
    @Input() rightsInfo: RightsInfo;
}