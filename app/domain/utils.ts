/**
 * Created by stefanos on 2/3/2017.
 */
import {allEnum} from "./omtd.enum";

export function transform(object : any ) : any {
    transformR(object);
    return object;
}

function transformR(object : any) : any {
    // if(object instanceof Object) {
    //     for (var v in object) {
    //         transformR(object[v]);
    //         if(typeof(object[v])!=="string" && object[v] != null) {
    //             let enumName = v.replace(/s$/, '') + 'Enum';
    //             console.log("checking " + enumName);
    //             if (allEnum[v] != undefined) {
    //                 object[v] = allEnum[v].find(v => v.key === object[v]).value;
    //                 console.log(object[v]);
    //             }
                
    //         }
    //     }
    // }
}