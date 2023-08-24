import { useState } from "react";

function FormControl(value, validators = []) {
    //patchValue can only patch values of the control. do not send validators as a parameter.
    [this.value, this.patchValue] = useState(value);

    //patchValidators can only patch validators of the control. do not send values as a parameter.
    //Always send an array of validator functions. If array is empty it will remove existing validators.
    [this.validators, this.patchValidators] = useState(validators);

    //patchTouched only makes touched property to true.
    [this.touched, this.patchTouched] = useState(false);

    //error property contains names of validator functions that have returned false
    [this.error, this.invalid] = isInvalid(this.value, this.validators);
    this.valid = !this.invalid;
}

const isInvalid = (value, validators) => {
    let isInvalid = false;
    let error = {};
    validators.forEach((validatorFn) => {
        if (validatorFn(value) === false) {
            error[validatorFn.name] = true;
            isInvalid = true;
        }
    });
    return [error, isInvalid];
}

export { FormControl }