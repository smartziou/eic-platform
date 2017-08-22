import {AbstractControl} from "@angular/forms";

export function URLValidator(control: AbstractControl) {
    return PatternValidator(control, /https?:\/\/.+/);
}

export function URLListValidator(control: AbstractControl) {
    if (control.value.split) {
        return validateArray(control.value.split("\n"), /https?:\/\/.+/);
    } else {
        return null;
    }
}

export function PatternValidator(control: AbstractControl, pattern: RegExp) {
    let val = "" + control.value;
    let ret = val.match(pattern) ? null : {validationFailed: true};
    return ret;
}

export function CommaSeparatedPatternValidator(control: AbstractControl, pattern: RegExp) {
    let val = ("" + control.value).split(",");
    let ret = validateArray(val, pattern);
    return ret;
}

export function validateArray(array: Array<string>, pattern: RegExp) {
    let ret = null;
    if (array.length === 0) {
        return ret;
    }
    for (let e of array) {
        let str = "" + e;
        let matched = str.match(pattern);
        console.log(e, matched, pattern);
        if (matched === null) {
            ret = {validationFailed: true};
            break;
        }
    }

    return ret;
}