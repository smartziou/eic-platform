/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent} from "../../../domain/openminted-model";
import {MetadataHeaderInfoFormControl} from "../shared/metadata-header-info-form.component";

@Component({
    selector: 'component-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
})

export class ComponentRegistrationFormComponent implements OnInit {

    component: OMTDComponent;

    @Input('group')
    myForm: FormGroup;

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({
        });
    }

    onSubmit(myForm: any) {
        console.log(myForm);
    }

}