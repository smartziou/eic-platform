/**
 * Created by stefania on 10/6/16.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'component-registration-options',
    templateUrl: 'app/pages/resourceregistration/component/component-registration.component.html',
    styleUrls:  ['app/pages/resourceregistration/component/component-registration.component.css'],
})

export class ComponentRegistrationComponent {

    constructor(
        private router: Router) {}

    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/component/xml']);
    }
}