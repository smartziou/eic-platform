/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import {Description, relatedPersonTypeDesc, personIdentifierDesc} from "./omtd.description";


@Component({
    selector: 'related-persons',
    template : `
<div [formGroup]="myForm">
    <related-person [group]="myForm"></related-person>
</div>
`
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
<div class="form-group">
     <label class="col-sm-2 col-md-2 control-label" *ngFor="let radio of radioButton">
        <input type="radio" name="options" [checked]="radio === radioButtonSelected" (click)="changeType(radio)">
        {{radio}}
    </label>
</div>

<div *ngIf="radioButtonSelected==='Person'">
    <div [formGroup]="myFormPersonArray">    
        <div *ngFor="let address of myFormPersonArray.controls.length; let i=index">
            
            <div class="form-group" [formGroupName]="i">
                <label class="col-sm-2 col-md-2 control-label">{{relatedPerson.label}} {{i}}</label>
                <div class="col-sm-5 col-md-4">
                    <input type="text" class="form-control" formControlName="value">
                    <small>{{relatedPerson.desc}}</small>
                </div>
                <label class="col-sm-1 col-md-1 control-label">Lang</label>
                <div class="col-sm-5 col-md-4">
                    <input type="text" class="form-control" formControlName="lang">
                </div>
                <div class="uk-button" (click)="deletePerson(i)" *ngIf="i>0" >Delete Person</div>
            </div>
        </div>
        <div class="uk-button" (click)="addNew()">Add Person</div>
    </div>
</div>

<div *ngIf="radioButtonSelected==='Identifier'">
    <div [formGroup]="myFormIdentifier">
        <div *ngFor="let address of myFormIdentifierArray.controls; let i=index">
            <div class="form-group" [formGroupName]="i">
                <label class="col-sm-2 col-md-2 control-label">{{relatedPersonIdentifier.label}} {{i}}</label>
                <div class="col-sm-5 col-md-4">
                    <input type="text" class="form-control" formControlName="value2">
                    <small>{{relatedPersonIdentifier.desc}}</small>
                </div>
                <label class="col-sm-1 col-md-1 control-label">Lang</label>
                <div class="col-sm-5 col-md-4">
                    <input type="text" class="form-control" formControlName="lang">
                </div>
                <div class="uk-button" (click)="deletePerson(i)" *ngIf="i>0" >Delete Identifier</div>
            </div>
        </div>
        <div class="uk-button" (click)="addNew()">Add Person</div>
    </div>
</div>

`
})
export class RelatedPersonForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    private myFormPersonArray : FormArray;
    private myFormPerson : FormGroup;


    private myFormIdentifierArray : FormArray;
    private myFormIdentifier : FormGroup;

    private myForm : FormGroup;

    private relatedPerson : Description;
    private relatedPersonIdentifier : Description;

    private radioButton : string[] = ["Person","Identifier"];
    private radioButtonSelected : string;

    constructor(private _fb: FormBuilder) {
        this.relatedPersonIdentifier = personIdentifierDesc;
        this.relatedPerson = relatedPersonTypeDesc;
        this.radioButtonSelected = this.radioButton[0];
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
            return this._fb.group({
                value2: ['', [Validators.required]],
                lang: ['', [Validators.required]]
            });
        }
    }

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            console.log(choice);
        }
    }

    public deletePerson(i : number) : void {
        console.log(i)
        this.myFormPersonArray.removeAt(i);
    }

    public addNew() : void {
        console.log("Added new");
        this.myFormPersonArray.push(
            this.newPerson(this.radioButtonSelected)
        );
    }

    ngOnInit() {
        this.myFormPerson = this.newPerson("Person");
        this.myFormIdentifier = this.newPerson("Identifier");

        this.myFormPersonArray = this._fb.array([this.myFormPerson]);
        console.log("LALALALAL");
        console.log(this.myFormPersonArray.controls);
        this.myFormIdentifierArray= this._fb.array([this.myFormIdentifier]);
        this.myForm = this._fb.group({
        });

        this.myForm.addControl("personName",this.myFormPersonArray);
        this.myForm.addControl("personIdentifier",this.myFormIdentifierArray);
        //this.myForm.setControl("personIdentifier",this.myFormIdentifierArray);
        this.parentForm.addControl('relatedPerson',this.myForm);
    }
}