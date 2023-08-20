import { useState } from "react"
import { FormControl } from "./FormControl";

function FormGroup(formGroupObj) {
    [this.group, this.patchGroup] = useState(formGroupObj);
    this.controls = GroupToControls(this.group, this.controls);
    this.value = groupToObj(this.group);
    // this.patchValue = (valueObj) => { return patchValue(valueObj, formGroupObj) };
    const isInvalid = (controls) => {
        let isInvalid = false;
        const keys_arr = Object.keys(controls);
        keys_arr.forEach((key) => {
            controls[key].validators.forEach((validatorFn) => {
                if (validatorFn(controls[key][0]) === false) {
                    isInvalid = true;
                }
            });
        })
        return isInvalid;
    }
    const isValid = (controls) => {
        let isValid = true;
        const keys_arr = Object.keys(controls);
        keys_arr.forEach((key) => {
            controls[key].validators.forEach((validatorFn) => {
                if (validatorFn(controls[key][0]) === false) {
                    isValid = false;
                }
            });
        })
        return isValid;
    }

    this.invalid = isInvalid(this.controls);
    this.valid = isValid(this.controls);
    console.log(this)
}

function GroupToControls(group) {
    const keys_arr = Object.keys(group);
    const newObj = { ...group };
    keys_arr.forEach((key) => {
        //setNewObjKey1((prev) => ({ ...prev, [key]: new FormControl(group[key][0], group[key][1]) }))
        newObj[key] = new FormControl(group[key][0], group[key][1]);
        // Object.assign(newObj[key], newControl)
        // newObj[key]=new FormControl('',[]);
        // newObj[key].patchValue(group[key][0]);
        // newObj[key].patchValidators(group[key][1])
    })
    console.log(newObj)
    return newObj;
}

function groupToObj(group) {
    const keys_arr = Object.keys(group);
    const newObj = { ...group };
    keys_arr.forEach((key) => {
        newObj[key] = group[key][0]
    });
    return newObj;
}

export { FormGroup }