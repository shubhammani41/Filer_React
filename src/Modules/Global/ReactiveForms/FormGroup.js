import { FormControl } from "./FormControl";

//Takes a Key Value pair Object with keys containing an array with value on first index
//and Validators array at second index
function FormGroup(formGroupObj) {
    //Controls has all the formControls as key value pairs.
    this.controls = formGroupObjToControls(formGroupObj);

    //Value has simple key value pairs of all the control values.
    this.value = controlsToValue(this.controls);
    this.invalid = isInvalid(this.controls);
    this.valid = !this.invalid;

    //patchValue can update value as well as validators of all or some controls.
    //Always send a array with value at first index and validator arrays at second index.
    //If no Validator array is sent then it will leave existing validators as is.
    //If empty Validators array is sent it will remove existing validators.
    this.patchValue = (valueObj) => { patchValue(valueObj, this) }
}

const formGroupObjToControls = (formGroupObj) => {
    const keys_arr = Object.keys(formGroupObj);
    const controlObj = {};
    keys_arr.forEach(key => {
        controlObj[key] = new FormControl(formGroupObj[key][0], formGroupObj[key][1] ? formGroupObj[key][1] : [])
    })
    return controlObj;
}

const controlsToValue = (controls) => {
    const keys_arr = Object.keys(controls);
    const valueObj = {};
    keys_arr.forEach(key => {
        valueObj[key] = controls[key].value
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
        if (formGroup.controls[key] && (valueObj[key][0] || valueObj[key][0] === '')) {
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