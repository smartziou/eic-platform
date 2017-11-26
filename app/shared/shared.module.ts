/**
 * Created by pgl on 29/09/17.
 */
import {NgModule} from "@angular/core";
import {JoinPipe} from "../services/join.pipe";
import {KeysPipe} from "../services/key.pipe";
import {LookUpPipe} from "../services/lookup.pipe";
import {PremiumSortPipe} from "../services/premiumsort.pipe";

@NgModule({
    imports: [],
    declarations: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PremiumSortPipe
    ],
    exports: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PremiumSortPipe
    ]
})
export class SharedModule {
}