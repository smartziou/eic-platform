/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { CorpusTextPartInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'corpus-text-part-info',
    templateUrl: 'app/pages/landingpages/resourceelements/corpus-text-part-info.component.html',
})

export class CorpusTextPartInfoComponent {
    @Input() corpusTextPartInfo: CorpusTextPartInfo;
}