/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ValidationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'validation-info',
    templateUrl: 'app/pages/landingpages/resourceelements/validation-info.component.html',
    styleUrls:  ['app/pages/landingpages/landing-page.component.css'],
})

export class ValidationInfoComponent {
    @Input() validationInfo: ValidationInfo;
}