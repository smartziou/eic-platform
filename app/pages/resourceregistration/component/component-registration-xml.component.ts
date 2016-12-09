/**
 * Created by stefania on 10/6/16.
 */
import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";
import {Resource} from "../../../domain/resource";

@Component({
    selector: 'component-registration-xml',
    templateUrl: 'app/pages/resourceregistration/component/component-registration-xml.component.html',
    styleUrls:  ['app/pages/resourceregistration/component/component-registration-xml.component.css'],
})

export class ComponentRegistrationXMLComponent {

    private componentXMLForm: FormGroup;
    private errorMessage: string;
    private xmlURL : string;
    private successMessage: string;

    private uploadedFile : File;

    //private resource: Resource;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        this.componentXMLForm = fb.group({
            "xml": [""],
        });
        this.uploadedFile = null;
        this.xmlURL = '';
    }

    onSubmit(componentXML: any, event: Event) {

        // event.preventDefault();

        this.successMessage = null;
        console.log(componentXML.xml);

        var resource: Resource = new Resource();
        resource.payload = componentXML.xml;
        resource.resourceType = 'component';
        resource.payloadFormat = 'xml';

        this.resourceService.registerComponent(resource).subscribe(
            resource => this.successfullySubscribed(resource),
            error => this.handleError(<any>error));
    }

    previewFromURL() {
        this.resourceService.getXML(this.xmlURL).subscribe(
            string => {this.componentXMLForm.setValue({'xml' : string});}
        );

    }

    previewFromFile() {
        if (this.uploadedFile) {
            var myReader:FileReader = new FileReader();
            var tempForm = this.componentXMLForm;
            console.log(this.uploadedFile);
            myReader.onloadstart = function(e) {
                //TODO validation here
            }
            myReader.onloadend = function(e){
                tempForm.setValue({'xml' : myReader.result});
            }
            myReader.readAsText(this.uploadedFile);

        }
    }

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