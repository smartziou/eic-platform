// import {Component, Injector} from "@angular/core";
// import {MyGroup} from "../multiforms/my-group.interface";
// import * as sd from "./services.description";
// import {Validators} from "@angular/forms";
// import {ResourceService} from "../../services/resource.service";
// @Component({
//     selector: 'regionsInfo-form',
//     template: `
//         <div [formGroup]="group">
//             <select formControlName="entry">
//                 <option *ngFor="let c of regions | keys" [ngValue]="c">{{regions[c]}}</option>
//             </select>
//         </div>
//     `
// })
//
// export class RegionsComponent extends MyGroup {
//
//     constructor(private resourceService: ResourceService, injector: Injector) {
//         super(injector);
//     }
//
//     regions: any = {
//         "QQ": "Error fetching regions"
//     };
//
//     readonly groupDefinition = {
//         entry: ["", Validators.required]
//     };
//
//     readonly regionsDesc: sd.Description = sd.regionsDesc;
//
//     ngOnInit() {
//         super.ngOnInit();
//         this.resourceService.getVocabularies("Region").subscribe(
//             suc => this.regions = suc,
//             err => console.error(err)
//         );
//     }
//
// }