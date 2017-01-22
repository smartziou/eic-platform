/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { OMTDComponent } from "../../../domain/openminted-model";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'component-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
})

export class ComponentRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    @Input('corpus')
    component : Observable<OMTDComponent> = null;

    @Output('corpusForm')
    componentForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

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
                resourceType : 'component'
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