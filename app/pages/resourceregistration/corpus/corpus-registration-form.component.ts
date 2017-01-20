/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
    corpus : Observable<OMTDCorpus> = null;

    @Output('corpusForm')
    corpusForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    loadCorpus(corpus : OMTDCorpus) {
        let temp = JSON.stringify(corpus,(key,value)=>{return (value == null) ? "" : value});
        corpus = JSON.parse(temp);

        this.myForm.patchValue(corpus);
        this.myForm.patchValue(corpus);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                resourceType : 'corpus'
            })

        });
        this.myForm.valueChanges.subscribe(corpus => this.corpusForm.emit(this.myForm));

        if (this.corpus) {
            this.corpus.subscribe(
                corpus => this.loadCorpus(corpus),
                error => console.log(error));
        }
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

}