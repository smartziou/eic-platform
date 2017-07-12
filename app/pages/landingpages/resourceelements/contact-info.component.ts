/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ContactInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'contact-info',
    templateUrl: './contact-info.component.html',
})

export class ContactInfoComponent {
    @Input() contactInfo: ContactInfo;

    get personNames() : string[] {
        let names : string[] = [];
        for(let n of this.contactInfo.contactPersons) {
            if(n.separateNames) {
                names.push(`${n.separateNames.givenNames[0].value} ${n.separateNames.surnames[0].value}`);
            } else if (n.names.length > 0) {
                names.push(n.names[0].value);
            }
        }
        return names;
    }
}