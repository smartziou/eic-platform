/**
 * Created by stefania on 1/18/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import {EnumValues, resourceIdentifierSchemeNameEnum} from "./omtd.enum";
import {IdentifierFormControl} from "./identifier-common-form.component";
import {Description, resourceNameDesc, descriptionDesc, resourceShortNameDesc} from "./omtd.description";

@Component({
    selector: 'contact-info-form',
    templateUrl : 'app/pages/resourceregistration/shared/templates/contact-info-form.component.html',
    styleUrls : ['app/pages/resourceregistration/shared/templates/common.css']
})

export class ContactInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    private name : string;

    public myForm: FormGroup;

    private radioButton : string[] = ["Contact Email","Landing Page"];
    private radioButtonSelected : string;

    private resourceNameDescription: Description = resourceNameDesc;
    private descriptionDescription: Description = descriptionDesc;
    private resourceShortNameDescription: Description = resourceShortNameDesc;

    public customClass: string = 'customAccordionPanel';

    ngOnInit() {
        this.myForm = ContactInfoFormControl.generate(this._fb);
        this.myForm.setValidators(this.validate);

        this.parentForm.addControl("contactInfo", this.myForm);
    }

    public validate(): ValidatorFn {
        //console.log('Bla bla bla bla cha cha cha');
        return (c: AbstractControl): {[key: string]: any} => {
            console.log('this is called the bla bla cha cha cha');
            console.log(this.radioButtonSelected, c);
            if(this.radioButtonSelected=='Contact Email') {
                if(!c.get('contactEmail').value)
                    return null;
                else
                    return {error: "Contact email is required"};
            } else {
                if(!c.get('landingPage').value)
                    return null;
                else
                    return {error: "Landing page is required"};
            }
        };
    }

    constructor(private _fb: FormBuilder) {
        this.radioButtonSelected = this.radioButton[0];
    }

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            contactEmail: '',
            landingPage: ''
        });
    }

    public changeType(choice: string) :void {

        console.log("Changed type");

        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
        }
    }
}