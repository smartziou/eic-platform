/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent} from "../../../domain/openminted-model";
import {MetadataHeaderInfoFormControl} from "../shared/metadata-header-info-form.component";

@Component({
    selector: 'component-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
})

export class ComponentRegistrationFormComponent implements OnInit {

    component: OMTDComponent;

    metadataHeaderInfo: MetadataHeaderInfoFormControl;
    myForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.metadataHeaderInfo = new MetadataHeaderInfoFormControl(_fb);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            value: this.metadataHeaderInfo.formGroup

        });
    }

    onSubmit(myForm: any) {
        console.log(myForm);
    }

}