/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { AnnotationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'annotation-info',
    templateUrl: 'app/pages/landingpages/resourceelements/annotation-info.component.html',
})

export class AnnotationInfoComponent {
    @Input() annotationInfo: AnnotationInfo;
}