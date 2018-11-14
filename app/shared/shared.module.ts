/**
 * Created by pgl on 29/09/17.
 */

import {NgModule} from "@angular/core";
import {JoinPipe} from "./pipes/join.pipe";
import {KeysPipe} from "./pipes/keys.pipe";
import {LookUpPipe} from "./pipes/lookup.pipe";
import {PremiumSortPipe} from "./pipes/premium-sort.pipe";
import {SafePipe} from "./pipes/safe.pipe";
import {ValuesPipe} from "./pipes/getValues.pipe";
import {StringArraySortPipe} from "./pipes/sort.pipe";


@NgModule({
    imports: [],
    declarations: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PremiumSortPipe,
        SafePipe,
        ValuesPipe,
        StringArraySortPipe
    ],
    exports: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PremiumSortPipe,
        SafePipe,
        ValuesPipe,
        StringArraySortPipe
    ]
})
export class SharedModule {
}
