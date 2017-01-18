import {Component, OnInit, Input} from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
/**
 * Created by stefanos on 16/1/2017.
 */

@Component({
    selector: 'dataset-distribution-info-form-common',
    templateUrl : 'app/pages/resourceregistration/shared/templates/dataset-distribution-info-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class DatasetDistributionInfoFormControl implements OnInit{
    @Input('group')
    myForm : FormGroup;

    ngOnInit(): void {
    }

}