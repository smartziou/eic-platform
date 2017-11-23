/**
 * Created by pgl on 29/09/17.
 */
import {NgModule} from "@angular/core";
import {JoinPipe} from "../services/join.pipe";
import {KeysPipe} from "../services/key.pipe";
import {PrettifyWithDictionaryPipe} from "../services/prettifyWithDictionary.pipe";

@NgModule({
    imports: [],
    declarations: [
        JoinPipe,
        KeysPipe,
        PrettifyWithDictionaryPipe
    ],
    exports: [
        JoinPipe,
        KeysPipe,
        PrettifyWithDictionaryPipe
    ]
})
export class SharedModule {
}