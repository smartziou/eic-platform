/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input, Output, EventEmitter, Type} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Component as OMTDComponent } from "../../../domain/openminted-model";
import { Observable } from 'rxjs/Rx';
import {ExampleFormControl} from "../shared/example.component";
import {ContactPersonFormControl} from "../shared/contactPerson.component";
import {MyStringFormGroup} from "../shared/my-string-form.component";

@Component({
    selector: 'component-registration-form',
    templateUrl: './component-registration-form.component.html',
    styleUrls:  ['./component-registration-form.component.css'],
})

export class ComponentRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    @Input('component')
    component : Observable<OMTDComponent> = null;

    @Output('componentForm')
    componentForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();


    type : Type<any> = MyStringFormGroup;

    constructor(private _fb: FormBuilder) {
    }

    loadComponent(component : OMTDComponent) {
        let temp = JSON.stringify(component,(key,value)=>{return (value == null) ? "" : value});
        component = JSON.parse(temp);

        this.myForm.patchValue(component);
        this.myForm.patchValue(component);
    }

    ngOnInit() {

        this.myForm = this._fb.group({
            componentInfo:this._fb.group({
                // resourceType : 'component'
            })

        });
        this.myForm.valueChanges.subscribe(component => this.componentForm.emit(this.myForm));

        if (this.component) {
            this.component.subscribe(
                component => this.loadComponent(component),
                error => console.log(error));
        }

    }
}