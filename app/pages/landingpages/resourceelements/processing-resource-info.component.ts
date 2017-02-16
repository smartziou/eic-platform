/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ProcessingResourceInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'processing-resource-info',
    templateUrl: './processing-resource-info.component.html',
})

export class ProcessingResourceInfoComponent {
    @Input() processingResourceInfo: ProcessingResourceInfo;
}