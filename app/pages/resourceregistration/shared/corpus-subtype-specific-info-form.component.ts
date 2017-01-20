import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {RawCorpusInfoFormControl} from "./raw-corpus-info-form.component";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'corpus-subtype-specific-info-form',
    template: `

<div [formGroup]="parentForm">
    <div formGroupName="corpusSubtypeSpecificInfo">
    <raw-corpus-info-form [group]="myForm"></raw-corpus-info-form>
    </div>
</div>
`,
    styleUrls: ['app/pages/resourceregistration/shared/templates/common.css']
})
export class CorpusSubtypeSpecificInfoForm implements OnInit {
    @Input('group')
    parentForm: FormGroup;

    myForm : FormGroup;

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({});
        this.parentForm.addControl("corpusSubtypeSpecificInfo",this.myForm);
        console.log("parent",this.parentForm,"this",this.myForm);
    }

}