import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {EnumValues, distributionMediumEnum} from "./omtd.enum";
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
    parentForm : FormGroup;

    myForm : FormGroup;

    distributionEnum : EnumValues[];

    constructor(private _fb : FormBuilder) {
        this.distributionEnum = distributionMediumEnum;
    }

    $add() {
        const control = <FormArray>this.myForm.controls["distributionMediums"];
        control.push(new FormControl(""));
    }

    $delete(i : number) {
        const control = <FormArray>this.myForm.controls["distributionMediums"];
        control.removeAt(i);
    }

    ngOnInit(): void {
        this.myForm = this._fb.group({
            distributionMediums : this._fb.array([new FormControl("")])
        });
        this.parentForm.addControl("distributionInfo",this.myForm);
    }

}
