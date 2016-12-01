/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import {Description, relatedPersonTypeDesc} from "./omtd.description";


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
<div [formGroup]="myForm">
    <div *ngFor="let address of myFormArray.controls; let i=index">
        <div class="form-group">
            <label class="col-sm-2 col-md-2 control-label">{{relatedPerson.label}} {{i}}</label>
            <div class="col-sm-10 col-md-8">
                <input type="text" class="form-control" formControlName="value">
                <small>{{relatedPerson.desc}}</small>
            </div>
            <button class="uk-button" (click)="addNew()">Add Person</button>
            <button class="uk-button" (click)="deletePerson(i)">Delete Person</button>
        </div>
    </div>
</div>
`
})
export class RelatedPersonForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    public myForm : FormGroup;

    private myFormArray : FormArray;

    private relatedPerson : Description;

    constructor(private _fb: FormBuilder) {
        this.relatedPerson = relatedPersonTypeDesc;
    }

    public newPerson() : FormGroup {
        return this._fb.group({
            value : ['', [Validators.required]]
        });
    }

    public deletePerson(i : number) : void {
        console.log(this.myFormArray.controls)
        this.myFormArray.removeAt(i);
    }

    public addNew() : void {
        this.myFormArray.push(
            this.newPerson()
        );
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            value : ['', [Validators.required]]
        });
        this.myFormArray = this._fb.array([this.myForm])
        this.parentForm.addControl('relatedPerson',this.myFormArray);
    }
}