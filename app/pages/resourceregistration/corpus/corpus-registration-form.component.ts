/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { Observable } from 'rxjs/Rx';
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: './corpus-registration-form.component.html',
    styleUrls:  ['./corpus-registration-form.component.css'],
})

export class CorpusRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    @Input('corpus')
    corpus : Observable<OMTDCorpus> = null;

    @Output('corpusForm')
    corpusForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    constructor(private _fb: FormBuilder) {
    }

    loadCorpus(corpus : OMTDCorpus) {
        let temp = JSON.stringify(corpus,(key,value)=>{return (value == null) ? "" : value});
        corpus = JSON.parse(temp);
        corpus.corpusInfo.resourceType = "corpus";
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

        // //TODO remove
        // this.corpus = this.resourceService.getCorpus("rawCorpus_almostall");

        if (this.corpus) {
            this.corpus.subscribe(
                corpus => this.loadCorpus(corpus),
                error => console.log(error));
        }
    }

}