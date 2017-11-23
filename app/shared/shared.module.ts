/**
 * Created by pgl on 29/09/17.
 */
import {NgModule} from "@angular/core";
import {JoinPipe} from "../services/join.pipe";
import {KeysPipe} from "../services/key.pipe";
import {LookUpPipe} from "../services/lookup.pipe";
import {PrettifyWithDictionaryPipe} from "../services/prettifyWithDictionary.pipe";

@NgModule({
    imports: [],
    declarations: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PrettifyWithDictionaryPipe
    ],
    exports: [
        JoinPipe,
        KeysPipe,
        LookUpPipe,
        PrettifyWithDictionaryPipe
    ]
})
export class SharedModule {
}