/**
 * Created by pgl on 29/09/17.
 */
import {NgModule} from "@angular/core";
import {KeysPipe} from "../services/key.pipe";
import {PrettifyWithDictionaryPipe} from "../services/prettifyWithDictionary.pipe";

@NgModule({
    imports: [],
    declarations: [
        KeysPipe,
        PrettifyWithDictionaryPipe
    ],
    exports: [
        KeysPipe,
        PrettifyWithDictionaryPipe
    ]
})
export class SharedModule {
}