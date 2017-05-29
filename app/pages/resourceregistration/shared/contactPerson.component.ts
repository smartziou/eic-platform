/**
 * Created by stefanos on 25/5/2017.
 */
import {AfterContentInit, AfterViewInit, Component, Type} from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { FormArray, AbstractControl } from "@angular/forms";
import { EnumValues, personIdentifierSchemeNameEnum } from "../../../domain/omtd.enum";
import {
    Description, surnameDesc, nameDesc, givenNameDesc,
    personIdentifierDesc
} from "../../../domain/omtd.description";
import {MyStringFormControl, MyStringFormGroup} from "./my-string-form.component";
import { IdentifierCommonFormControl } from "./identifierCommon.component";

@Component({
    selector: 'contactPerson-form',
    template : `

<form-inline [description]="{desc : '', label : 'Choose'}" [params]="null">
    <div *ngFor="let radio of radioButton">
        <label class="col-sm-2 col-md-2 radio-label">
            <input type="radio" name="options{{name + label + index}}" [checked]="radio === radioButtonSelected"
                   (click)="changeType(radio)">
            {{radio}}
        </label>
    </div>
</form-inline>

<div [hidden]="radioButtonSelected!=='Separate'">
    <div [formGroup]="group">
        <form-inline [description]="surnameDesc" [width]="9">
            <div *ngFor="let surname of getMyControl('surnames').controls; let i=index">
                <!--<div *ngIf="i!=0" class="col-sm-2 col-md-2 control-label"></div>-->
                <my-string [group]="surname" [required]="required"></my-string>
                <div class="form-group" >
                    <a class="remove-element col-sm-1 col-md-1" (click)="remove(getMyControl('surnames'),i)"><i
                            class="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </form-inline>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="add(getMyControl('surnames'),myString)">
                    <i class="fa fa-plus" aria-hidden="true"></i> Add {{surnameDesc.label}}
                </a>
            </div>
        </div>
        
        <div class="form-group-divider"></div>
        
        <form-inline [description]="givenNameDesc" [width]="9">
            <div *ngFor="let name of getMyControl('givenNames').controls; let i=index">
                <my-string [group]="name" [required]="required"></my-string>
                <div class="form-group" >
                    <a class="remove-element col-sm-1 col-md-1" (click)="remove(getMyControl('givenNames'),i)"><i
                            class="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </form-inline>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="add(getMyControl('givenNames'),myString)">
                    <i class="fa fa-plus" aria-hidden="true"></i> Add {{givenNameDesc.label}}
                </a>
            </div>
        </div>
    </div>
</div>

<div [hidden]="radioButtonSelected!=='Name'">
    <div [formGroup]="group">
        <form-inline [description]="nameDesc">
            <div *ngFor="let name of getMyControl('names').controls; let i=index">
                <!--<div *ngIf="i!=0" class="col-sm-2 col-md-2 control-label"></div>-->
                <my-string [group]="name" [required]="required"></my-string>
                <div class="form-group" >
                    <a class="remove-element col-sm-1 col-md-1" (click)="remove(getMyControl('names'),i)"><i
                            class="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </form-inline>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="add(getMyControl('names'),myString)">
                    <i class="fa fa-plus" aria-hidden="true"></i> Add {{nameDesc.label}}
                </a>
            </div>
        </div>
    </div>
</div>

<div class="form-group-divider"></div>


<form-repeat-inline [component]="myStringType" [group]="group" 
                    [name]="'namess'" [required]="true" [description]="surnameDesc">
    
</form-repeat-inline>
<div [formGroup]="group">
    <form-inline [description]="personIdentifierDesc" [width]="9">
        <div *ngFor="let ident of getMyControl('personIdentifiers').controls; let i=index">
            <identifierCommon-form [group]="ident" [index]="i"
            [schemeName]="'personIdentifierSchemeName'" [enumValues]="personIdentifierEnum">
            </identifierCommon-form>
            <div class="form-group" >
                <a class="remove-element col-sm-1 col-md-1" (click)="remove(getMyControl('personIdentifiers'),i)"><i
                        class="fa fa-times" aria-hidden="true"></i></a>
            </div>
        </div>
    </form-inline>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element" (click)="add(getMyControl('personIdentifiers'),getIdentifier)">
                <i class="fa fa-plus" aria-hidden="true"></i> Add {{nameDesc.label}}
            </a>
        </div>
    </div>
</div>

`,
    styleUrls : ['./templates/common.css']
})

export class ContactPersonFormControl extends MyGroup implements AfterViewInit {

    readonly groupDefinition = {
        surnames : this._fb.array([this.myString]),
        givenNames : this._fb.array([this.myString]),
        names : this._fb.array([this.myString]),
        personIdentifiers : this._fb.array([this.getIdentifier])
    };

    private readonly radioButton : string[] = ['Separate','Name'];


    myStringType : Type<any> = MyStringFormGroup;

    private surnameDesc : Description = surnameDesc;
    private radioButtonSelected : string = this.radioButton[0];
    private nameDesc : Description = nameDesc;
    private givenNameDesc : Description = givenNameDesc;
    private personIdentifierDesc : Description = personIdentifierDesc;

    private personIdentifierEnum : EnumValues[] = personIdentifierSchemeNameEnum;

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            this.applyChanges();
        }
    }

    ngAfterViewInit(): void {
        this.applyChanges();
    }

    private applyChanges() {
        if(this.radioButtonSelected === 'Separate') {
            this.getMyControl('names').disable();
            this.getMyControl('surnames').enable();
            this.getMyControl('givenNames').enable();
        }
        else if(this.radioButtonSelected === 'Name') {
            this.getMyControl('names').enable();
            this.getMyControl('surnames').disable();
            this.getMyControl('givenNames').disable();
        }
    }

    private get myString() {
        return MyStringFormControl.generate(this._fb);
    }

    private get getIdentifier() {
        return IdentifierCommonFormControl.generate(this._fb,'personIdentifier');
        // return this._fb.group({});
    }

    private remove(array : FormArray, index : number) {
        array.removeAt(index);
    }

    private add(array : FormArray, model : AbstractControl) {
        array.push(model);
    }

}

