import { useEffect, useState } from 'react';

function FormControlArray(formControlArrayObj) {
    [this.controls, this.setControls] = useState(formControlArrayObjToControls(formControlArrayObj, this));
    this.value = controlArrayToValueArray(this.controls);
    this.invalid = isInvalid(this.controls);
    this.valid = !this.invalid;

    useEffect(() => {
        console.log(this)
    }, [this.controls]);


    this.patchValue = (valueObjArray) => {
        //
    }
    this.popControl = () => {
        this.setControls(prevControls => {
            prevControls.pop();
            return prevControls;
        })
    }
    this.pushControl = (controlObj) => {
        this.setControls(prevControls => [...prevControls, new FormControl(controlObj[0], controlObj[1] ? controlObj[1] : [], this)])
    }
    this.removeControlsAt = (index, numberOfControl = 1) => {
        this.setControls(prevControls => {
            if (index >= 0 && index < prevControls.length) {
                prevControls.splice(index, numberOfControl);
            }
            return prevControls;
        })
    }
    this.addControlAt = (controlObj, index = null) => {
        this.setControls(prevControls => {
            if (index) {
                if (index >= 0 && index < prevControls.length) {
                    prevControls.splice(index, 0, controlObj);
                }
            }
            else {
                prevControls.splice(index, prevControls.length - 1, controlObj);
            }
            return prevControls;
        })
    }
}

const formControlArrayObjToControls = (formControlArrayObj, formControlArray) => {
    return formControlArrayObj.map(obj => {
        return new FormControl(obj[0], obj[1] ? obj[1] : [], formControlArray)
    });
}

const controlArrayToValueArray = (controlArr) => {
    return controlArr.map(formControl => formControl.value)
}

const isInvalid = (controlArray) => {
    let isInvalid = false;
    controlArray.forEach(formControl => {
        if (formControl.invalid) {
            isInvalid = true;
            return false;
        }
    });

    return isInvalid;
}

function FormControl(value, validators = [], formControlArray) {
    //patchValue can only patch values of the control. do not send validators as a parameter.
    this.value = value;
    this.patchValue = (value) => {
        formControlArray.setControls(prevControls => {
            let tempFormControl = new FormControl(value, this.validators, formControlArray);
            let index = prevControls.indexOf(this);
            let tempFromControlArray = [...prevControls];
            tempFromControlArray[index] = tempFormControl;
            return tempFromControlArray
        })
        // let tempFormControl = new FormControl(value, this.validators, formControlArray);
        // let index = formControlArray.controls.indexOf(this);
        // let tempFromControlArray = [...formControlArray.controls];
        // tempFromControlArray[index] = tempFormControl;
        // formControlArray.setControls(tempFromControlArray);
    }

    //patchValidators can only patch validators of the control. do not send values as a parameter.
    //Always send an array of validator functions. If array is empty it will remove existing validators.
    this.validators = validators;
    this.patchValidators = (validators) => {
        let tempFormControl = new FormControl(this.value, validators, formControlArray);
        let index = formControlArray.controls.indexOf(this);
        let tempFromControlArray = [...formControlArray.controls];
        tempFromControlArray[index] = tempFormControl;
        formControlArray.setControls(tempFromControlArray);
    }

    //patchTouched only makes touched property to true.
    this.touched = false;
    this.patchTouched = () => {
        this.touched = true;
    }

    const isInvalid = (value, validators) => {
        let isInvalid = false;
        let errors = {};
        validators.forEach((validatorFn) => {
            if (validatorFn(value) === false) {
                errors[validatorFn.name] = true;
                isInvalid = true;
            }
        });
        return [errors, isInvalid];
    }

    //errors property contains names of validator functions that have returned false
    [this.errors, this.invalid] = isInvalid(this.value, this.validators);
    this.valid = !this.invalid;
}

export { FormControlArray }