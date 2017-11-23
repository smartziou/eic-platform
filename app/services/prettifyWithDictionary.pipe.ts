/**
 * Created by pgl on 23/11/17.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "prettifyWithDictionary"})
export class PrettifyWithDictionaryPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return (value || []).map(e => args[0][e] || e).join(",");
    }
}