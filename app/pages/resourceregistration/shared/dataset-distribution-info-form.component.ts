import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {EnumValues, distributionMediumEnum} from "./omtd.enum";
/**
 * Created by stefanos on 16/1/2017.
 */

@Component({
    selector: 'dataset-distributions-info-form-common',
    template : `
<accordion-group #group [panelClass]="customClass"
                 [isOpen]="true" [panelClass]="parentForm.valid ? 'panel-success' : 'panel-danger'">
    <div accordion-heading>
        <span>Distribution Info
            <i class="fa" [ngClass]="{'fa-angle-down': !group?._isOpen, 'fa-angle-up': group?._isOpen}" aria-hidden="true"></i>
        </span>
    </div>
                 
    <div [formGroup]="myForm">
        <div *ngFor="let c of myForm.controls; let i=index" class="group" formGroupName="{{i}}">
            <div class="form-group">
                <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                    <div class="group-label">
                        <span>Distribution Info</span>
                        <a class="remove-element" (click)="$delete(i)">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <dataset-distribution-info-form-common [group]="c"></dataset-distribution-info-form-common>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="$add()"><i class="fa fa-plus" aria-hidden="true"></i>
                    Add New Distribution</a>
            </div>
        </div>
    </div>

</accordion-group>
`,
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class DatasetDistributionsInfoFormControl implements OnInit{
    @Input('group')
    parentForm : FormGroup;

    myForm : FormArray;

    public customClass: string = 'customAccordionPanel';

    constructor(private _fb : FormBuilder) {
    }

    $add() {
        this.myForm.push(DatasetDistributionInfoFormControl.generate(this._fb));
    }

    $delete(i : number) {
        this.myForm.removeAt(i);
    }

    ngOnInit(): void {
        this.myForm = this._fb.array([DatasetDistributionInfoFormControl.generate(this._fb)]);
        this.parentForm.addControl("distributionInfos",this.myForm);
    }

}


@Component({
    selector: 'dataset-distribution-info-form-common',
    templateUrl : 'app/pages/resourceregistration/shared/templates/dataset-distribution-info-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class DatasetDistributionInfoFormControl implements OnInit{
    @Input('group')
    parentForm : FormGroup;

    distributionEnum : EnumValues[];

    constructor(private _fb : FormBuilder) {
        this.distributionEnum = distributionMediumEnum;
    }

    static generate(_fb : FormBuilder) {
        return _fb.group({
            distributionMediums : _fb.array([new FormControl("")])
        });
    }

    $add() {
        const control = <FormArray>this.parentForm.controls["distributionMediums"];
        control.push(new FormControl(""));
    }

    $delete(i : number) {
        const control = <FormArray>this.parentForm.controls["distributionMediums"];
        control.removeAt(i);
    }

    ngOnInit(): void {
        console.log("tralalilalilalo",this.parentForm);
    }

}
