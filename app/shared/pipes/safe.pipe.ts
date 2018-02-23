/**
 * Created by pgl on 12/12/17.
 */

import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: "safe"})
export class SafePipe implements PipeTransform {
    constructor(public sanitizer: DomSanitizer) {
    }

    transform(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}