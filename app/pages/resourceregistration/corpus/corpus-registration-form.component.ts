/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent, Order, OMTDCorpus} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: 'app/pages/resourceregistration/corpus/corpus-registration-form.component.html',
})

export class CorpusRegistrationFormComponent implements OnInit {

    component: OMTDComponent;

    @Input('group')
    myForm: FormGroup;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                corpusSubtypeSpecificInfo: this._fb.group({
                
                })
            })
        });
        var self = this;
        this.resourceService.getCorpus("rawCorpus_almostall").subscribe(res => {
            console.log(res);
            var x : OMTDCorpus = res;
            this.myForm.patchValue(x);
            //setTimeout(this.myForm.patchValue,1000,{metadataHeaderInfo : x.metadataHeaderInfo || {}})
            this.resourceService.getCorpus("rawCorpus_almostall").subscribe(res => {
                var x: OMTDCorpus = res;
                this.myForm.patchValue(x);
            });
        });

    }

    onSubmit(myForm: FormGroup) {
        console.log("Submitted")
        console.log(myForm.value,myForm);
    }

}