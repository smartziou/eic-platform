/**
 * Created by stefania on 1/17/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'my-string',
    template : `
    <div [formGroup]="parentForm" [ngClass]="{'has-error':!parentForm.valid}">
        <div class="col-sm-6 col-md-6">
            <input type="text" class="form-control" formControlName="value" placeholder="Name">
        </div>
        <div class="col-sm-2 col-md-2">
            <input type="text" class="form-control" formControlName="lang" placeholder="Language">
        </div>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class MyStringFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;


    @Input('required')
    private required : boolean = false;

    ngOnInit() {}

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {}

    public static generate(_fb: FormBuilder, validate : boolean = false) {
        let required = (validate) ? ['', Validators.required] : '' ;
        return _fb.group({
            value : required,
            lang : ''
        });
    }
}