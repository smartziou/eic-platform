/**
 * Created by stefania on 1/19/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Corpus as OMTDCorpus, DatasetDistributionInfo, DistributionMediumEnum, RightsInfo
} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'corpus-upload',
    templateUrl: './corpus-upload.component.html',
    styleUrls:  ['./corpus-upload.component.css'],
})

export class CorpusUploadComponent implements OnInit {

    corpusForm: FormGroup;
    zipForm: FormGroup;
    zipFile : File;
    corpusValue : OMTDCorpus;

    zipFormErrorMessage: string = null;
    corpusFormErrorMessage: string = null;

    errorMessage: string = null;
    successfulMessage: string = null;

    private uploadingCorpus:boolean = false;

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

        this.successfulMessage = null;
        this.errorMessage = null;

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

            this.uploadingCorpus = true;

            this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
                let corpusBody : OMTDCorpus = this.corpusForm.value;
                let distributionInfo : DatasetDistributionInfo = new DatasetDistributionInfo();
                distributionInfo.distributionLoc.distributionMedium = DistributionMediumEnum.DOWNLOADABLE;
                distributionInfo.distributionLoc.distributionURL = id;
                distributionInfo.rightsInfo = new RightsInfo();
                distributionInfo.rightsInfo.licenceInfos =
                // distributionInfo.rightsInfo.rightsStatementInfo = new RightsStatementInfo();
                // distributionInfo.rightsInfo.rightsStatementInfo.rightsStmtName = RightsStmtNameEnum.OPEN_ACCESS;
                corpusBody.corpusInfo.distributionInfos  = [];
                corpusBody.corpusInfo.distributionInfos.push(distributionInfo);
                
                this.resourceService.uploadCorpus(this.corpusForm.value).subscribe(
                    res => {
                        this.uploadingCorpus = false;
                        this.successfulMessage = 'Corpus uploaded successfully';
                        window.scrollTo(0,0);
                    }, error => this.handleError(error)
                );
            });

        } else {
            this.uploadingCorpus = false;
            window.scrollTo(0,0);
        }
    }

    handleError(error) {
        this.uploadingCorpus = false;
        this.errorMessage = 'Corpus uploading failed (Server responded: ' + error + ')';
        window.scrollTo(0,0);
    }

}