function FormGroup(formGroupObj) {
    this.controls = formGroupObj;
    this.value = controlsToValue(this.controls);
    this.invalid = isInvalid(this.controls);
    this.valid = !this.invalid;
    this.patchValue = (valueObj) => { patchValue(valueObj, this) }
    console.log(this);
}

const controlsToValue = (controls) => {
    const keys_arr = Object.keys(controls);
    const valueObj = {};
    keys_arr.forEach(key => {
        valueObj[key]=controls[key].value
    }
    )
    return valueObj;
}

const isInvalid = (controls) => {
    const keys_arr = Object.keys(controls);
    let isInvalid = false;
    keys_arr.forEach(key => {
        if (controls[key].invalid === true) {
            isInvalid = true;
            return false;
        }
    })
    return isInvalid;
}

const patchValue = (valueObj, formGroup) => {
    const keys_arr = Object.keys(valueObj);
    const fromGroupValueObj = {};
    keys_arr.forEach(key => {
        if (formGroup.controls[key] && (valueObj[key][0]||valueObj[key][0]==='')) {
            fromGroupValueObj[key] = valueObj[key][0];
            formGroup.controls[key].patchValue(valueObj[key][0]);
        }
        if (formGroup.controls[key] && valueObj[key][1]) {
            formGroup.controls[key].patchValidators(valueObj[key][1]);
        }
    })
    formGroup.value = fromGroupValueObj;
    formGroup.invalid = isInvalid(formGroup.controls);
    formGroup.valid = !formGroup.invalid;
}

export { FormGroup }