import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from "@angular/forms";
import {EnumValues, distributionMediumEnum} from "../../../domain/omtd.enum";
import {MyGroup} from "../myform/my-group.interface";
import {
    Description, datasetDistributionInfoDesc, distributionMediumDesc,
    distributionURLDesc
} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 16/1/2017.
 */

@Component({
    selector: 'datasetDistributionsInfo-form',
    template : `
<accordion-group #group1 [panelClass]="'customAccordionPanel'"
                 [isOpen]="true" [panelClass]="parentGroup.controls.distributionInfos?.valid ? 'panel-success' : 'panel-danger'">
    <div accordion-heading>
        <span>
            <i class="fa fa" [ngClass]="parentGroup.controls.distributionInfos?.valid ? 'fa-check':'fa-exclamation'" aria-hidden="true"></i>
            Distribution Info
            <i class="fa" [ngClass]="{'fa-angle-down': !group1?._isOpen, 'fa-angle-up': group1?._isOpen}" aria-hidden="true"></i>
        </span>
    </div>
                 
    <div [formGroup]="parentGroup">

        <form-repeat [component]="datasetDistributionType" [parentGroup]="parentGroup" 
                            [name]="'distributionInfos'" [required]="true" [description]="datasetDistributionDesc">
        </form-repeat>
        
    </div>

</accordion-group>
`,
    styleUrls : ['./templates/common.css']
})
export class DatasetDistributionsInfoFormControl {
    @Input()
    private parentGroup : FormGroup = null;
    private datasetDistributionType : Type<any> = DatasetDistributionInfoFormControl;
    readonly datasetDistributionDesc : Description = datasetDistributionInfoDesc;

}


@Component({
    selector: 'datasetDistributionInfo-form',
    template : `
<div [formGroup]="group">
    <div formGroupName="distributionLoc">
        <form-inline [description]="distributionMediumDesc" [valid]="getMyControl('distributionLoc.distributionMedium').valid">
            <select name="role" class="form-control" formControlName="distributionMedium">
                <option *ngFor="let value of distributionMediumEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </form-inline>
        
        <div class="form-group-divider"></div>
    
        <form-inline [description]="distributionURLDesc" [valid]="getMyControl('distributionLoc.distributionURL').valid">
            <input type="text" class="form-control" formControlName="distributionURL" placeholder="{{distributionURLDesc.label}}">
        </form-inline>
    </div>
      
    <rightsInfo-form [parentGroup]="group" [name]="'rightsInfo'"></rightsInfo-form>
    
</div>  
    

`,
    styleUrls : ['./templates/common.css']
})
export class DatasetDistributionInfoFormControl extends MyGroup {

    readonly distributionMediumEnum : EnumValues[] = distributionMediumEnum;
    readonly distributionMediumDesc : Description = distributionMediumDesc;
    readonly distributionURLDesc : Description = distributionURLDesc;


    readonly groupDefinition = {
        distributionLoc : this._fb.group({
            distributionMedium : ['', Validators.required],
            distributionURL : ['', Validators.required]
        })
    };


}
