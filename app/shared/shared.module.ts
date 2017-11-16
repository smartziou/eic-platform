/**
 * Created by pgl on 29/09/17.
 */
import {NgModule} from "@angular/core";
import {KeysPipe} from "../services/key.pipe";

@NgModule({
    imports: [],
    declarations: [
        KeysPipe
    ],
    exports: [
        KeysPipe
    ]
})
export class SharedModule {
}