/**
 * Created by pgl on 23/11/17.
 */

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "join"})
export class JoinPipe implements PipeTransform {
    transform(arr: any[], separator?: string): any {
        return (arr || []).join(separator || "");
    }
}
