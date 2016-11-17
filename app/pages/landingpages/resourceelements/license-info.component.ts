/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { LicenceInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'license-info',
    templateUrl: 'app/pages/landingpages/resourceelements/license-info.component.html',
})

export class LicenseInfoComponent {
    @Input() licenseInfo: LicenceInfo;
}