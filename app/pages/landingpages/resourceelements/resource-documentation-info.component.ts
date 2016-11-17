/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ResourceDocumentationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'resource-documentation-info',
    templateUrl: 'app/pages/landingpages/resourceelements/resource-documentation-info.component.html',
})

export class ResourceDocumentationInfoComponent {
    @Input() resourceDocumentationInfo: ResourceDocumentationInfo;
}