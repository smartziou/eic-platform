import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {Component, Input, OnInit, Injector, ViewRef} from "@angular/core";
/**
 * Created by stefanos on 15/5/2017.
 */

@Component({
})
export class MyGroup implements OnInit {

    @Input() public group: FormGroup | FormArray;

    @Input() public name : string | number;

    @Input() public required : boolean = false;

    @Input() public label : string = 'Default Label';

    @Input() public description : string = 'No description';

    @Input() public index : number = -1;

    protected _fb : FormBuilder;

    protected groupDefinition : { [key:string]:any };

    constructor(injector : Injector) {
        this._fb = injector.get(FormBuilder);
    }

    public generate() : FormGroup {

        let ret = this._fb.group(this.groupDefinition);

        if (!this.required)
            Object.keys(ret.controls).forEach(item => ret.controls[item].clearValidators());
        // else
            // Object.keys(ret.controls).forEach(item => ret.controls[item].setValue('required'));
        return ret;
    }

    ngOnInit(): void {
        if(this.index == -1) {
            (<FormGroup>this.group).addControl(<string>this.name, this.generate());
        } else {
            this.name = this.index;
        }
    }

}