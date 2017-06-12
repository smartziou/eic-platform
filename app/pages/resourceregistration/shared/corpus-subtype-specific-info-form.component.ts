import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {RawCorpusInfoFormControl} from "./raw-corpus-info-form.component";
import {MyGroup} from "../myform/my-group.interface";
import {CorpusTextPartInfoFormControl} from "./corpusTextPartInfo.component";
import {Description, corpusTextPartInfoDesc} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'corpusSubtypeSpecificInfo-form',
    template: `
<accordion-group #group1 [panelClass]="'customAccordionPanel'"
                 [isOpen]="true" [panelClass]="valid ? 'panel-success' : 'panel-danger'">
    <div accordion-heading>
        <span>
            <i class="fa" [ngClass]="valid ? 'fa-check':'fa-exclamation'" aria-hidden="true"></i>
            Corpus Info
            <i class="fa" [ngClass]="{'fa-angle-down': !group1?._isOpen, 'fa-angle-up': group1?._isOpen}" aria-hidden="true"></i>
        </span>
    </div>
    
    <div [formGroup]="group">

        <form-repeat [component]="textPartType" [parentGroup]="group" 
                            [name]="'corpusTextParts'" [required]="true" [description]="corpusTextPartInfoDesc">
        </form-repeat>
        
    </div>

</accordion-group>
`,
    styleUrls: ['./templates/common.css']
})
export class CorpusSubtypeSpecificInfoForm extends MyGroup {

    name = 'corpusSubtypeSpecificInfo';

    groupDefinition = {
        rawCorpusInfo :  this._fb.group({
            corpusMediaPartsType :  this._fb.group({

            }),
            corpusSubtype : "rawCorpus"
        })
    };

    readonly corpusTextPartInfoDesc : Description = corpusTextPartInfoDesc;
    private textPartType : Type<any> = CorpusTextPartInfoFormControl;

}