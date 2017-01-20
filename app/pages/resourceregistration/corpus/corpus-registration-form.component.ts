/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MetadataHeaderInfo, OMTDComponent, Order, OMTDCorpus} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'corpus-registration-form',
    templateUrl: 'app/pages/resourceregistration/corpus/corpus-registration-form.component.html',
})

export class CorpusRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    @Input('corpus')
    corpus : Observable<OMTDCorpus>;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    loadCorpus(corpus : OMTDCorpus) {
        this.myForm.patchValue(corpus);
        this.myForm.patchValue(corpus);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                resourceType : 'corpus'
            })

        });
        var self = this;

        this.corpus.subscribe(
            corpus => this.loadCorpus(corpus),
            error => console.log(error));

        // this.resourceService.getCorpus("rawCorpus_almostall").subscribe(res => {
        //     console.log(res);
        //     var x : OMTDCorpus = res;
        //     this.myForm.patchValue(x);
        //     //setTimeout(this.myForm.patchValue,1000,{metadataHeaderInfo : x.metadataHeaderInfo || {}})
        //     this.resourceService.getCorpus("rawCorpus_almostall").subscribe(res => {
        //         var x: OMTDCorpus = res;
        //         this.myForm.patchValue(x);
        //     });
        // });

    }

    onSubmit(myForm: FormGroup) {
        console.log("Submitted")
        console.log(myForm.value,myForm);
    }

}