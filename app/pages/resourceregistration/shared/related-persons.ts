/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import {Description, relatedPersonTypeDesc, personIdentifierDesc} from "./omtd.description";
import {EnumValues, personIdentifierSchemeNameEnum} from "./omtd.enum";
import {IdentifierFormControl} from "./identifier-common.component";


@Component({
    selector: 'related-persons',
    template : `
    
<div [formGroup]="myForm" class="group">
    <div class="col-md-offset-2 col-sm-offset-2">
        <div class="group-label">Metadata Creators</div>
    </div>
    <related-person [group]="myForm" [personLabel]="'Metadata Creator'"></related-person>
</div>
`,
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class RelatedPersonsForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    public myForm : FormGroup;

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({
        });
        this.parentForm.addControl('relatedPersons',this.myForm);
    }
}


@Component({
    selector: 'related-person',
    template : `
<div class="form-group form-inline">
    <label class="col-sm-2 col-md-2 control-label">
        Choose
    </label>
    <div class="col-sm-10 col-md-10">
        <div *ngFor="let radio of radioButton">
            <label class="col-sm-2 col-md-2 radio-label">
                <input type="radio" name="options" [checked]="radio === radioButtonSelected" (click)="changeType(radio)">
                {{radio}}
            </label>
        </div>
    </div>
</div>

<div *ngIf="radioButtonSelected==='Person'">
    <div [formGroup]="myFormPerson">    
        <div class="form-group" >
            <label class="col-sm-2 col-md-2 control-label">{{personLabel}}</label>
            <div *ngFor="let address of myFormPersonArray.controls; let i=index">
                <div *ngIf="i!=0" class="col-sm-2 col-md-2 control-label"></div>
                <div class="form-group">    
                    <div class="col-sm-6 col-md-6">
                        <input type="text" class="form-control" formControlName="value" placeholder="Name">
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <input type="text" class="form-control" formControlName="lang" placeholder="Language">
                    </div>
                    <a class="remove-element col-sm-1 col-md-1" (click)="deletePerson('Person',i)"><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="addNew('Person')"><i class="fa fa-plus" aria-hidden="true"></i> Add Name</a>
            </div>
        </div>      
    </div>
</div>

<div *ngIf="radioButtonSelected==='Identifier'">
    <div [formGroup]="myFormIdentifier">
        <!--<div class="form-group">-->
            <div *ngFor="let address of myFormIdentifierArray.controls; let i=index" class="form-group">
                <div>    
                    <label *ngIf="i==0" class="col-sm-2 col-md-2 control-label">{{personDesc.label}}</label>
                    <div *ngIf="i!=0" class="col-sm-2 col-md-2 control-label"></div>
                    <identifier-common [group]="address" [name]="'personIdentifier'" 
                    [schemeValues]="personEnum" [schemeUri]="personDesc"></identifier-common>
                    <a class="remove-element col-sm-1 col-md-1" (click)="deletePerson('Identifier',i)"><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        <!--</div>-->
        
        <div class="form-group">
            <label *ngIf="myFormIdentifierArray.controls==0" class="col-sm-2 col-md-2 control-label">{{personDesc.label}}</label>
            <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
                <a class="add-new-element" (click)="addNew('Identifier')"><i class="fa fa-plus" aria-hidden="true"></i> Add {{radioButtonSelected}}</a>
            </div>
        </div>    
        
    </div>
</div>

`,
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class RelatedPersonForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('personLabel')
    private personLabel : string;

    private myFormPersonArray : FormArray;
    private myFormPerson : FormGroup;


    private myFormIdentifierArray : FormArray;
    private myFormIdentifier : FormGroup;

    private myForm : FormGroup;

    private relatedPerson : Description;
    private relatedPersonIdentifier : Description;

    private radioButton : string[] = ["Person","Identifier"];
    private radioButtonSelected : string;

    private personEnum : EnumValues;
    private personDesc : Description;

    constructor(private _fb: FormBuilder) {
        this.relatedPersonIdentifier = personIdentifierDesc;
        this.relatedPerson = relatedPersonTypeDesc;
        this.radioButtonSelected = this.radioButton[1];
        this.personEnum = personIdentifierSchemeNameEnum;
        this.personDesc = personIdentifierDesc;
    }

    public newPerson(type : string) : FormGroup {
        if(type=="Person") {
            console.log("Created a new Person");
            return this._fb.group({
                value: ['', [Validators.required]],
                lang: ['', [Validators.required]]
            });
        } else if (type === "Identifier"){
            console.log("Created a new Identifier");
            var tmp = IdentifierFormControl.generate("personIdentifier");
            return this._fb.group(tmp);
        }
    }

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            console.log(choice);
        }
    }

    public deletePerson(type:string, i : number) : void {
        if(type=="Person") {
            this.myFormPersonArray.removeAt(i);
        } else if (type === "Identifier"){
            this.myFormIdentifierArray.removeAt(i);
        }
    }

    public addNew(type : string) : void {
        if(type=="Person") {
            this.myFormPersonArray.push(
                this.newPerson(this.radioButtonSelected)
            );
        } else if (type === "Identifier"){
            this.myFormIdentifierArray.push(
                this.newPerson(this.radioButtonSelected)
            );
        }


    }

    ngOnInit() {
        this.myFormPerson = this.newPerson("Person");
        this.myFormIdentifier = this.newPerson("Identifier");
        console.log("Person",this.myFormPerson,this.myFormPersonArray);
        this.myFormPersonArray = this._fb.array([this.myFormPerson]);
        this.myFormIdentifierArray= this._fb.array([this.myFormIdentifier]);

        this.myForm = this._fb.group({
        });

        this.myForm.addControl("personName",this.myFormPersonArray);
        this.myForm.addControl("personIdentifier",this.myFormIdentifierArray);
        //this.myForm.setControl("personIdentifier",this.myFormIdentifierArray);
        this.parentForm.addControl('relatedPerson',this.myForm);
    }
}