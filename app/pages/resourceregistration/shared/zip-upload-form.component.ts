/**
 * Created by stefania on 1/20/17.
 */
import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";
import {Resource} from "../../../domain/resource";

@Component({
    selector: 'zip-upload',
    template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)" class="zipUpload">
        <div data-uk-grid-margin="" class="uk-grid uk-grid-width-1-1">
            <div class="form-group">
                <!--<input type="file" name="xmlFile" (change)="report($event)" formGroupName="fileUpload">-->
                <input type="file" name="xmlFile" (change)="report($event)">
            </div>
        </div>
    </form>
    `,
    styles: [`
        .zipUpload input {
          height: 35px;
        }
    `],
})

export class ZipUploadComponent {

    @Input('group')
    myForm: FormGroup;

    private errorMessage: string;
    private successMessage: string;

    private uploadedFile : File;

    //private resource: Resource;

    constructor(private _fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        // this.myForm = this._fb.group({
        //     fileUpload: ''
        // });
        this.uploadedFile = null;
    }

    onSubmit(componentXML: any, event: Event) {

        // event.preventDefault();

        // this.successMessage = null;
        // console.log(componentXML.xml);
        //
        // var resource: Resource = new Resource();
        // resource.payload = componentXML.xml;
        // resource.resourceType = 'component';
        // resource.payloadFormat = 'xml';
        //
        // this.resourceService.registerComponent(resource).subscribe(
        //     resource => this.successfullySubscribed(resource),
        //     error => this.handleError(<any>error));
    }

    // previewFromFile() {
    //     if (this.uploadedFile) {
    //         var myReader:FileReader = new FileReader();
    //         var tempForm = this.componentXMLForm;
    //         console.log(this.uploadedFile);
    //         myReader.onloadstart = function(e) {
    //             //TODO validation here
    //         }
    //         myReader.onloadend = function(e){
    //             tempForm.setValue({'xml' : myReader.result});
    //         }
    //         myReader.readAsText(this.uploadedFile);
    //
    //     }
    // }

    report($event : any) {
        this.uploadedFile = $event.target.files[0];
    }

    successfullySubscribed(resource : Resource) {
        this.successMessage = 'Your component has been successfully registered';
        return false;
    }

    handleError(error) {
        this.errorMessage = 'System error registering your component (Server responded: ' + error + ')';
    }
}