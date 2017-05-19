import {MyGroup} from "../myform/my-group.interface";
import {Component,OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
/**
 * Created by stefanos on 15/5/2017.
 */

@Component({
    selector: 'example-form',
    template : `
    <div [formGroup]="group">
        <div formGroupName="{{name}}" > 
            <div class="form-group">
                <label for="{{formA.id}}" >Email address</label>
                <input type="text" class="form-control" #formA placeholder="Email" formControlName="formA">
            </div>
            <div class="form-group">
                <label for="{{formB.id}}">Password</label>
                <input type="text" class="form-control" #formB placeholder="Password" formControlName="formB">
            </div>
        </div>
    </div>
    `
})

export class ExampleFormControl extends MyGroup implements OnInit {

    readonly definition = {
        formA : '',
        formB : ['', Validators.required]
    };

    constructor(_fb : FormBuilder) {
        super(_fb);
        this.groupDefinition = this.definition;
    }
}