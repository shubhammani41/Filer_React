import { useState } from "react";

function FormControl(value, validators) {
    [this.value, this.patchValue] = useState(value);
    [this.validators, this.patchValidators] = useState(validators);
    [this.touched, this.patchTouched] = useState(false);
    this.invalid = isInvalid(this.value,this.validators);
    this.valid = isValid(this.value,this.validators);
}

function isInvalid(value,validators) {
    let isInvalid = false;
    validators.forEach((validatorFn) => {
        if (validatorFn(value) == false) {
            isInvalid = true;
        }
    });
    return isInvalid;
}

function isValid(value,validators) {
    let isValid = true;
    validators.forEach((validatorFn) => {
        if (validatorFn(value) == false) {
            isValid = false;
        }
    });
    return isValid;
}

export { FormControl }