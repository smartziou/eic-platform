/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentDocumentationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'component-documentation-info',
    templateUrl: 'app/pages/landingpages/resourceelements/component-documentation-info.component.html',
})

export class ComponentDocumentationInfoComponent {
    @Input() componentDocumentationInfo: ComponentDocumentationInfo;
}