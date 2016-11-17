/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { VersionInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'version-info',
    templateUrl: 'app/pages/landingpages/resourceelements/version-info.component.html',
})

export class VersionInfoComponent {
    @Input() versionInfo: VersionInfo;
}