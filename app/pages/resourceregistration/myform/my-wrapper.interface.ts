/**
 * Created by stefanos on 19/5/2017.
 */
import {
    Component, Input, OnInit, Type, AfterViewInit, ViewChild, ViewContainerRef, ComponentRef,
    ComponentFactoryResolver
} from "@angular/core";
import {MyFormDirective} from "./my-form.directive";
import {MyGroup} from "./my-group.interface";


// @Component({
//     selector : 'form-repeat',
//     template : `
//
// <div [formGroup]="group">
//     <div formArrayName="{{name}}">
//     <template my-form>
//     </template>
//     </div>
// </div>
// <button class="uk-button uk-button-large uk-button-blue registerButton" (click)="push()">Add One</button>
// `
//
// })
export abstract class MyWrapper {
    @Input() public component : Type<MyGroup>;

    @ViewChild(MyFormDirective) private formComponents: MyFormDirective;

    private viewContainerRef : ViewContainerRef;

    constructor(private _cfr: ComponentFactoryResolver) {
        this.viewContainerRef = this.formComponents.viewContainerRef;
    }

    public abstract insert( i :number);

    get directive() {
        return this.formComponents;
    }

    public createComponent(data : any) : ComponentRef {
        let componentFactory = this._cfr.resolveComponentFactory(this.component);
        return componentFactory.create(viewContainerRef.injector);
    }

    public get container() : ViewContainerRef {
        return this.viewContainerRef;
    }
}
