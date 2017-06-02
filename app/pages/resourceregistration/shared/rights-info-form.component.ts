import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder, FormArray, Validators} from "@angular/forms";
import {EnumValues, licenceEnum, rightsStatementEnum} from "../../../domain/omtd.enum";
import {
    Description, licenceDesc, licenceInfoDesc, nonStandardLicenceNameDesc,
    nonStandardLicenceTermsURLDesc, rightsStatementDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'rightsInfo-form',
    template: `        
        <div [formGroup]="group">
            <form-repeat [component]="licenseType" [parentGroup]="group"
                         [name]="'licenceInfos'" [required]="true" [description]="licenseInfoDesc">
            </form-repeat>
        </div>
`,
    styleUrls: ['./templates/common.css']
})
export class RightsInfoForm extends MyGroup {

    readonly groupDefinition = {

    };

    private licenseInfoDesc : Description = licenceInfoDesc;

    private licenseType : Type<any> = LicenseInfoForm;

}

@Component({
    selector: 'license-info',
    template: `
<div [formGroup]="group">
    <form-inline [description]="licenceDesc" [valid]="getMyControl('licence').valid">
        <select name="role" class="form-control" formControlName="licence">
            <option *ngFor="let value of licenceEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </form-inline>

    <div [hidden]="getMyControl('licence').value !== 'NON_STANDARD_LICENCE_TERMS'">
        <div class="form-group-divider"></div>
    
        <form-inline [description]="nonStandardLicenceNameDesc" [valid]="getMyControl('nonStandardLicenceName').valid">
            <input type="text" class="form-control" formControlName="nonStandardLicenceName" placeholder="{{nonStandardLicenceNameDesc.label}}">
        </form-inline>
    
        <div class="form-group-divider"></div>
    
        <form-inline [description]="nonStandardLicenceTermsURLDesc" [valid]="getMyControl('nonStandardLicenceTermsURL').valid">
            <input type="text" class="form-control" formControlName="nonStandardLicenceTermsURL" placeholder="{{nonStandardLicenceTermsURLDesc.label}}">
        </form-inline>
    </div>

    <form-inline [description]="rightsStatementDesc" [valid]="getMyControl('rightsStatement').valid">
        <select name="role" class="form-control" formControlName="rightsStatement">
            <option *ngFor="let value of rightsStatementEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </form-inline>
    
</div>
`,
    styleUrls: ['./templates/common.css']
})
export class LicenseInfoForm extends MyGroup {

    readonly groupDefinition = {
        licence : ['', Validators.required],
        nonStandardLicenceName : ['',Validators.required],
        nonStandardLicenceTermsURL : ['',Validators.required],
        rightsStatement : ['',Validators.required]
    };

    private readonly licenceEnum : EnumValues[] = licenceEnum;
    private readonly rightsStatementEnum : EnumValues[] = rightsStatementEnum;
    private readonly licenceDesc : Description = licenceDesc;
    private readonly rightsStatementDesc : Description = rightsStatementDesc;
    private readonly nonStandardLicenceNameDesc : Description = nonStandardLicenceNameDesc;
    private readonly nonStandardLicenceTermsURLDesc : Description = nonStandardLicenceTermsURLDesc;

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('licence').valueChanges.subscribe(_ => {
            let nonStandardLicenceName = this.getMyControl('nonStandardLicenceName');
            let nonStandardLicenceTermsURL = this.getMyControl('nonStandardLicenceTermsURL');
            if (_ !== 'NON_STANDARD_LICENCE_TERMS') {
                nonStandardLicenceName.disable();
                nonStandardLicenceTermsURL.disable();
            } else {
                nonStandardLicenceName.enable();
                nonStandardLicenceTermsURL.enable();
            }
        });

        this.getMyControl('licence').statusChanges.subscribe(_ => {
            let rightsStatement = this.getMyControl('rightsStatement');
            if (_ === 'VALID') {
                rightsStatement.clearValidators();
                rightsStatement.updateValueAndValidity();
            } else {
                rightsStatement.setValidators(Validators.required);
                rightsStatement.updateValueAndValidity();
            }
        });

        // this.getMyControl('rightsStatement').statusChanges.subscribe(_ => {
        //     let licence = this.getMyControl('licence');
        //     if (_ === 'VALID') {
        //         licence.clearValidators();
        //         licence.updateValueAndValidity();
        //     } else {
        //         licence.setValidators(Validators.required);
        //         licence.updateValueAndValidity();
        //     }
        // });

        let nonStandardLicenceName = this.getMyControl('nonStandardLicenceName');
        let nonStandardLicenceTermsURL = this.getMyControl('nonStandardLicenceTermsURL');
        nonStandardLicenceName.disable();
        nonStandardLicenceTermsURL.disable();
    }


}