/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent, Order} from "../../../domain/openminted-model";
import {MetadataHeaderInfoFormControl} from "../shared/metadata-header-info-form.component";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
})

export class CorpusRegistrationFormComponent implements OnInit {

    component: OMTDComponent;

    @Input('group')
    myForm: FormGroup;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({});
        var self = this;
        this.resourceService.getComponent("component_test2").subscribe(res => {
            console.log(res);
            var x : OMTDComponent = res;
            this.myForm.patchValue({metadataHeaderInfo : x.metadataHeaderInfo || {}});
            //setTimeout(this.myForm.patchValue,1000,{metadataHeaderInfo : x.metadataHeaderInfo || {}})
            this.resourceService.getComponent("component_test2").subscribe(res => {
                var x: OMTDComponent = res;
                this.myForm.patchValue({metadataHeaderInfo: x.metadataHeaderInfo || {}});
            });
        });

    }

    onSubmit(myForm: FormGroup) {
        console.log("Submitted")
        console.log(myForm.value,myForm);
    }

}