/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ContactInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'contact-info',
    templateUrl: 'app/pages/landingpages/resourceelements/contact-info.component.html',
})

export class ContactInfoComponent {
    @Input() contactInfo: ContactInfo;
}