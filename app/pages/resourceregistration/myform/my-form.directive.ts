/**
 * Created by stefanos on 15/5/2017.
 */
import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[my-form]',
})
export class MyFormDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }
}

