/**
 * Created by pgl on 27/10/17.
 */

// import {ErrorHandler, Injectable, Injector} from "@angular/core";
// import {Observable} from "rxjs/Observable";
//
// @Injectable()
// export class EinfraErrorHandler implements ErrorHandler {
//     constructor(private injector: Injector) {
//     }
//
//     async handleError(error : any) {
//         let msg = error instanceof Response ? ((await error.text()) || "") : (error.localizedMessage || error.localizedMessage || error.statusText || "Server error");
//         let code = error.status || error.code || "";
//         // console.error(error);
//         return Observable.throw(msg + " " + code);
//     }
// }
