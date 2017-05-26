import {Component, Injector, Input} from "@angular/core";
import {MyGroup} from "../myform/my-group.interface";
import {Validators, FormBuilder} from "@angular/forms";
import {EnumValues} from "../../../domain/omtd.enum";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'identifierCommon-form',
    template : `
<div [formGroup]="group">
<!--[ngClass]="{'has-error':!group.controls.value.valid}"-->
    <div class="col-sm-4 col-md-4" >
        <input type="text" class="form-control" formControlName="value" placeholder="value">
    </div>
<!--[ngClass]="{'has-error':!group.controls[schemeName].valid}"-->
    <div class="col-sm-3 col-md-3" >
        <select name="role" class="form-control" formControlName="{{schemeName}}">
            <option *ngFor="let value of enumValues" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="col-sm-3 col-md-3">
        <input type="text" class="form-control" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})

export class IdentifierCommonFormControl extends MyGroup {

    @Input() private schemeName : string;

    @Input() private enumValues : EnumValues[];

    private definition = {
        value : ['', Validators.required],
        schemeURI : ''
    };

    static generate(_fb : FormBuilder, schemeName : string) {
        let ret = {
            value : ['', Validators.required],
            schemeURI : ''
        };
        ret[schemeName + 'SchemeName'] = ['', Validators.required];
        return _fb.group(ret);
    }

    constructor(injector : Injector) {
        super(injector);
        console.log(this.group);
        this.definition[this.schemeName] = ['', Validators.required];
        this.groupDefinition = this.definition;
    }

}