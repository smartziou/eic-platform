/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import {PersonInfo, ResourceCreationInfo} from "../../../domain/openminted-model";

@Component({
    selector: 'resource-creation-info',
    templateUrl: './resource-creation-info.component.html',
})

export class ResourceCreationInfoComponent {
    @Input() resourceCreationInfo: ResourceCreationInfo;

    personName(person : PersonInfo) : string {
        if(person.separateNames) {
            return `${person.separateNames.givenNames[0].value} ${person.separateNames.surnames[0].value}`;
        } else if (person.names.length > 0) {
            return person.names[0].value;
        } else {
            return null;
        }
    }
}