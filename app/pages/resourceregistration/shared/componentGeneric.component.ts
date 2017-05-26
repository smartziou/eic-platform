import {Component, Injector} from "@angular/core";
import {MyGroup} from "../myform/my-group.interface";
import {Validators} from "@angular/forms";
import {EnumValues, componentTypeEnum, applicationTypeEnum} from "../../../domain/omtd.enum";
import {
    Description, revisionDesc, componentTypeDesc, applicationTypeDesc,
    applicationDesc
} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'componentGeneric-form',
    template : `
<accordion-group #group1 [panelClass]="'customAccordionPanel'"
                 [isOpen]="true" [panelClass]="myForm.valid ? 'panel-success' : 'panel-danger'">
    <div accordion-heading>
        <span>{{label}}
            <i class="fa" [ngClass]="{'fa-angle-down': !group1?._isOpen, 'fa-angle-up': group1?._isOpen}" aria-hidden="true"></i>
        </span>
    </div>
    <div [formGroup]="group">
        <div formGroupName="{{name}}">
            
            <form-inline [description]="componentDesc" [valid]="getMyControl('componentType').valid">
                <select name="role" class="form-control" formControlName="componentType">
                    <option *ngFor="let value of componentType" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                    </option>
                </select>
            </form-inline>
            
            <div class="form-group-divider"></div>
            
            <form-inline [description]="applicationCDesc" [params]="''">
                <label class="radio-label">
                    <input type="checkbox" formControlName="application">
                    Check if component can be used as an integrated end-user application
                </label>
            </form-inline>
                     
            <div class="form-group-divider"></div>
            
            <form-inline [description]="applicationDesc" [params]="'tooltip'" [valid]="getMyControl('applicationFunction').valid">
                <select name="role" class="form-control" formControlName="applicationFunction">
                    <option *ngFor="let value of applicationType" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                    </option>
                </select>
            </form-inline>
            
        </div>
    </div>
</accordion-group>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        componentType : ['', Validators.required],
        application : false,
        applicationFunction : ['', Validators.required]
    };

    private componentType :  EnumValues[] = componentTypeEnum;
    private applicationType : EnumValues[] = applicationTypeEnum;

    private componentDesc : Description = componentTypeDesc;
    private applicationDesc : Description = applicationTypeDesc;
    private applicationCDesc : Description = applicationDesc;

    required = true;

    name = 'componentInfo';

    label = 'Component General Info';

}/**
 * Created by stefanos on 24/5/2017.
 */
