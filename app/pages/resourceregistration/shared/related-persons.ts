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
    
<div [formGroup]="parentForm">
    <div *ngFor="let c of parentForm.controls.relatedPersons.controls; let i=index" class="group">
        <div class="col-md-offset-2 col-sm-offset-2">
            <div class="group-label">Metadata Creator <a class="remove-element col-sm-1 col-md-1" (click)="delete_creator(i)">
            <i class="fa fa-times" aria-hidden="true"></i></a></div>
        </div>
        <related-person [group]="c" [personLabel]="'Creator'" [index]="i"></related-person>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element" (click)="add_new()"><i class="fa fa-plus" aria-hidden="true"></i>
                Add New Creator</a>
        </div>
    </div>
</div>
`,
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class RelatedPersonsForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    private myForm : FormGroup;

    public add_new() {
        const control = <FormArray>this.parentForm.controls['relatedPersons'];
        control.push(this._fb.group({}));
    }

    public delete_creator(i : number) {
        const control = <FormArray>this.parentForm.controls['relatedPersons'];
        control.removeAt(i);
    }

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({});
        this.parentForm.addControl('relatedPersons',this._fb.array([this.myForm]));
    }
}


@Component({
    selector: 'related-person',
    templateUrl : 'app/pages/resourceregistration/shared/templates/related-person.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})
export class RelatedPersonForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('personLabel')
    private personLabel : string;

    @Input('index')
    private index : number;

    private myFormPerson : FormGroup;

    private myFormIdentifier : FormGroup;

    private schemeName : string;

    private relatedPerson : Description;
    private relatedPersonIdentifier : Description;

    private radioButton : string[] = ["Person","Identifier"];
    private radioButtonSelected : string;

    private personEnum : EnumValues;
    private personDesc : Description;

    constructor(private _fb: FormBuilder) {
        this.schemeName = "personIdentifier";
        this.relatedPersonIdentifier = personIdentifierDesc;
        this.relatedPerson = relatedPersonTypeDesc;
        this.radioButtonSelected = this.radioButton[0];
        this.personEnum = personIdentifierSchemeNameEnum;
        this.personDesc = personIdentifierDesc;
    }

    public newPerson(type : string) : FormGroup {
        if(type=="Person") {
            return this._fb.group({
                value: ['', [Validators.required]],
                lang: ['', [Validators.required]]
            });
        } else if (type === "Identifier"){
            return this._fb.group({});
        }
    }

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            if(choice == "Identifier") {
                this.parentForm.setControl("relatedPerson",this.myFormIdentifier);
            } else {
                this.parentForm.setControl("relatedPerson",this.myFormPerson);
            }
        }
    }

    public deletePerson(type:string, i : number) : void {
        if(type=="Person") {
            const control = <FormArray>this.myFormPerson.controls['personNames'];
            control.removeAt(i);
        } else if (type === "Identifier"){
            const control = <FormArray>this.myFormIdentifier.controls['personIdentifiers'];
            control.removeAt(i);
        }
    }

    public addNew(type : string) : void {
        if(type=="Person") {
            const control = <FormArray>this.myFormPerson.controls['personNames'];
            control.push(
                this.newPerson(this.radioButtonSelected)
            );
        } else if (type === "Identifier"){
            const control = <FormArray>this.myFormIdentifier.controls['personIdentifiers'];
            control.push(
                this.newPerson(this.radioButtonSelected)
            );
        }


    }

    ngOnInit() {

        this.myFormPerson = this._fb.group({
            'personNames' : this._fb.array([this.newPerson("Person")])
        });
        console.log("relatedPerson",this.myFormPerson);
        this.myFormIdentifier = this._fb.group({
            'personIdentifiers' : this._fb.array([this.newPerson("Identifier")])
        });
        console.log("relatedIdentifier",this.myFormIdentifier);

        if(this.radioButtonSelected == "Identifier") {
            this.parentForm.addControl("relatedPerson",this.myFormIdentifier);
        } else {
            this.parentForm.addControl("relatedPerson", this.myFormPerson);
        }

    }
}