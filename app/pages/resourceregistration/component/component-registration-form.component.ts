/**
 * Created by stefania on 10/19/16.
 */
import { Component } from '@angular/core';
import {MetadataHeaderInfo, OMTDCorpus} from "../../../domain/openminted-model";

@Component({
    selector: 'component-registration-form',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-form.component.html',
    // styleUrls:  ['app/pages/resourceregistration/component/component-registration-form.component.css'],
})

export class ComponentRegistrationFormComponent {
    
    corpus: OMTDCorpus;

    constructor() {
        console.log(MetadataHeaderInfo.prototype.label);
    }
}