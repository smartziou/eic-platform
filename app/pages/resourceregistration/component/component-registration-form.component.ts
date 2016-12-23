/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent, Order} from "../../../domain/openminted-model";
import {MetadataHeaderInfoFormControl} from "../shared/metadata-header-info-form.component";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'component-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
})

export class ComponentRegistrationFormComponent implements OnInit {

    component: OMTDComponent;

    @Input('group')
    myForm: FormGroup;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({
        });
        //http://83.212.101.85:8080/omtd-registry/request/component/ms2642096
        this.resourceService.getComponent("ms2473238").subscribe(res => {
            console.log(res);
            console.log(this.myForm.value);
            var x : OMTDComponent = res;
            //this.myForm.patchValue({metadataHeaderInfo : x.metadataHeaderInfo || {}});
        });

    }

    onSubmit(myForm: any) {
        console.log("Submitted")
        console.log(myForm);
    }

}