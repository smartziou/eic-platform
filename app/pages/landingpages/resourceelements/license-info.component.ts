/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import {LicenceInfo, VersionEnum} from "../../../domain/openminted-model";
import {EnumValues, licenceEnum, versionEnum} from "../../../domain/omtd.enum";

@Component({
    selector: 'license-info',
    templateUrl: './license-info.component.html',
})

export class LicenseInfoComponent {

    licenseValues : EnumValues[] = licenceEnum;
    versionValues : EnumValues[] = versionEnum;
    @Input() licenseInfo: LicenceInfo;

    private licence(l : string) {
        return this.licenseValues.find(v => v.key === l).value;
    }

    private version(v : string) {
        return this.versionValues.find(l => l.key === v).value;
    }
}