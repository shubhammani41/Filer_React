function FormGroup(fromGroupObj) {
    this.controls = fromGroupObj;
    this.value = controlsToValue(this.controls);
    this.invalid = isInvalid(controls);
    this.valid = !this.invalid;
    console.log(this);
}

const controlsToValue = (controls) => {
    const keys_arr = Object.keys(controls);
    return keys_arr.map(str => controls[str].value)
}

const isInvalid = (controls) => {
    const keys_arr = Object.keys(controls);
    let isInvalid = false;
    keys_arr.forEach(str => {
        if (controls[str].invalid === true) {
            isInvalid = true;
            return false;
        }
    })
    return isInvalid;
}