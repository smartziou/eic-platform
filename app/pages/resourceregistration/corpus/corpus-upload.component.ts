/**
 * Created by stefania on 1/19/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {
    MetadataHeaderInfo, OMTDComponent, Order, OMTDCorpus,
    DatasetDistributionInfo, DistributionMediumEnum, RightsInfo, RightsStatementInfo, RightsStmtNameEnum
} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";
import {DistributionMediums} from "../shared/distribution-mediums.component";
import {distributionMediumEnum} from "../shared/omtd.enum";

@Component({
    selector: 'corpus-upload',
    templateUrl: 'app/pages/resourceregistration/corpus/corpus-upload.component.html',
    styleUrls:  ['app/pages/resourceregistration/corpus/corpus-upload.component.css'],
})

export class CorpusUploadComponent implements OnInit {

    corpusForm: FormGroup;
    zipForm: FormGroup;
    zipFile : File;
    corpusValue : OMTDCorpus;

    zipFormErrorMessage: string = null;
    corpusFormErrorMessage: string = null;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    ngOnInit() {
        // this.myForm = this._fb.group({
        //     corpusInfo:this._fb.group({
        //         corpusSubtypeSpecificInfo: this._fb.group({
        //
        //         })
        //     })
        // });
        // var self = this;
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

    updateFile($event : any) {
        this.zipFile = $event;
        //console.log($event);
    }

    handleCorpus(corpus : any) {
        this.corpusForm = corpus;
    }

    onSubmit() {
        console.log("Submitted");
        console.log(this.zipFile,this.corpusForm);

        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';

        if(this.corpusForm.valid)
            this.corpusFormErrorMessage = null;
        else
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';

        if(this.zipFile && this.zipFile.name.endsWith(".zip") && this.corpusForm.valid) {
            this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
                let corpusBody : OMTDCorpus = this.corpusForm.value;
                let distributionInfo : DatasetDistributionInfo = new DatasetDistributionInfo();
                distributionInfo.distributionMediums = [DistributionMediumEnum.DOWNLOADABLE];
                distributionInfo.rightsInfo = new RightsInfo();
                distributionInfo.rightsInfo.rightsStatementInfo = new RightsStatementInfo();
                distributionInfo.rightsInfo.rightsStatementInfo.rightsStmtName = RightsStmtNameEnum.OPEN_ACCESS;
                corpusBody.corpusInfo.distributionInfos  = [];
                corpusBody.corpusInfo.distributionInfos.push(distributionInfo);
            });



        } else {
            window.scrollTo(0,0);
        }
    }

}