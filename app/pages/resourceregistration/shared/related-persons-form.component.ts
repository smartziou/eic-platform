///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import {Description, relatedPersonTypeDesc, personIdentifierDesc, myStringDesc} from "./omtd.description";
import {EnumValues, personIdentifierSchemeNameEnum} from "./omtd.enum";
import {IdentifierFormControl} from "./identifier-common-form.component";


@Component({
    selector: 'related-persons',
    template : `
    
<div [formGroup]="formArray">
    <div *ngFor="let c of formArray.controls; let i=index" class="group">
        <div class="col-md-offset-2 col-sm-offset-2">
            <div class="group-label">Metadata Creator <a class="remove-element col-sm-1 col-md-1" (click)="delete_creator(i)">
            <i class="fa fa-times" aria-hidden="true"></i></a></div>
        </div>
        <div formGroupName="{{i}}">
            <related-person [group]="c" [personLabel]="'Creator'" [index]="i"></related-person>
        </div>
        
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

    @Input('name')
    private name : string;

    // private myForm : FormGroup;
    private formArray : FormArray;

    public add_new() {
        this.formArray.push(RelatedPersonForm.generate(this._fb,"personIdentifierSchemeName"));
    }

    public delete_creator(i : number) {
        this.formArray.removeAt(i);
    }

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
        // this.myForm = this._fb.group(this._fb.array([]));
        this.formArray = this._fb.array([RelatedPersonForm.generate(this._fb,"personIdentifierSchemeName")]);
        this.parentForm.addControl(this.name,this.formArray);

        var self = this;
        this.formArray.patchValue = (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
            for(var i = 0; i < Object.keys(value).length; i++ ) {
                self.add_new();
            }
            Object.keys(value).forEach(name => {
                if (self.formArray.controls[name]) {
                    self.formArray.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.formArray.updateValueAndValidity({onlySelf, emitEvent});
        }
    }
}


@Component({
    selector: 'related-person',
    templateUrl : 'app/pages/resourceregistration/shared/templates/related-person-form.component.html',
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

    private myFormIdentifier : FormArray;

    private schemeName : string;

    private relatedPerson : Description;
    private relatedPersonIdentifier : Description;

    private radioButton : string[] = ["Person","Identifier"];
    private radioButtonSelected : string;

    private personEnum : EnumValues[];
    private personDesc : Description;

    constructor(private _fb: FormBuilder) {
        this.schemeName = "personIdentifierSchemeName";
        this.relatedPersonIdentifier = personIdentifierDesc;
        this.relatedPerson = relatedPersonTypeDesc;
        this.radioButtonSelected = this.radioButton[0];
        this.personEnum = personIdentifierSchemeNameEnum;
        this.personDesc = personIdentifierDesc;
    }

    public static newPerson(type : string, schemeName? : string) : any {
        if(type=="Person") {
            console.log("Generated new Person");
            return {
                value: ['', [Validators.required]],
                lang: ['', [Validators.required]]
            };
        } else if (type === "Identifier"){
            console.log("Generated new Identifier");
            return IdentifierFormControl.generate(schemeName);
        }
    }

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            // if(choice == "Identifier") {
            //     this.parentForm = this.myFormIdentifier;
            // } else {
            //     this.parentForm = this.myFormPerson;
            // }
        }
    }

    public deletePerson(type:string, i : number) : void {
        if(type=="Person") {
            const control = <FormArray>this.parentForm.controls['personNames'];
            control.removeAt(i);
        } else if (type === "Identifier"){
            const control = <FormArray>this.parentForm.controls['personIdentifiers'];
            control.removeAt(i);
        }
    }

    public addNew(type : string) : void {
        if(type=="Person") {
            const control = <FormArray>this.parentForm.controls['personNames'];
            control.push(
                RelatedPersonForm.newPerson(this.radioButtonSelected,"personIdentifierSchemeName")
            );
        } else if (type === "Identifier"){
            const control = <FormArray>this.parentForm.controls['personIdentifiers'];
            control.push(
                RelatedPersonForm.newPerson(this.radioButtonSelected, "personIdentifierSchemeName")
            );
        }


    }

    public static generate(_fb: FormBuilder, schemeName : string) {
        console.log("Generated new Related Person")
        return _fb.group({
            personNames : _fb.array([RelatedPersonForm.newPerson("Person")]),
            personIdentifiers : _fb.array([RelatedPersonForm.newPerson("Identifier",schemeName)])
        });
    }

    ngOnInit() {
        console.log(this.parentForm.controls.personNames.controls[0]);
        // this.myFormPerson = this._fb.group({
        //     'personNames' : this._fb.array([this.newPerson("Person")])
        // });
        //this.myFormPerson = this._fb.array([this.newPerson("Person")]);
        // this.myFormIdentifier = this._fb.group({
        //     'personIdentifiers' : this._fb.array([this.newPerson("Identifier")])
        // });
        //this.myFormIdentifier = this._fb.array([this.newPerson("Identifier")]);
        // this.myFormPerson = this._fb.group({
        //     personNames : this._fb.array([this.newPerson("Person")]),
        //     personIdentifiers :  this._fb.array([this.newPerson("Identifier")])
        // });
        // this.parentForm = this._fb.group({
        //     personNames : this._fb.array([this.newPerson("Person")]),
        //     personIdentifiers :  this._fb.array([this.newPerson("Identifier")])
        // });
        //this.myFormPerson.setParent(this.parentForm);
        // this.parentForm.setControl("personNames",this._fb.array([this.newPerson("Person")]));
        // this.parentForm.setControl("personIdentifiers",this._fb.array([this.newPerson("Identifier")]));
        //this.parentForm.push(this.myFormPerson);
        // this.parentForm.setControl("personNames", this.myFormPerson);
        // this.parentForm.setControl("personIdentifiers",this.myFormIdentifier);
        // //
        // if(this.radioButtonSelected == "Identifier") {
        //     this.parentForm = this.myFormIdentifier;
        // } else {
        //     this.parentForm = this.myFormPerson;
        // }

    }
}