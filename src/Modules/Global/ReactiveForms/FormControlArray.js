import { useEffect, useState } from 'react';

function FormControlArray(formControlArrayObj) {
    [this.controls, this.setControls] = useState(formControlArrayObjToControls(formControlArrayObj, this));
    this.value = controlArrayToValueArray(this.controls);
    this.invalid = isInvalid(this.controls);
    this.valid = !this.invalid;

    useEffect(() => {
        console.log(this)
    }, [this.controls]);


    this.patchControls = (valueObjArray) => {
        this.setControls(prevControls => {
            return formControlArrayObjToControls(valueObjArray, this)
        })
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
    this.insertControlAt = (controlObj, index = null) => {
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
    return formControlArrayObj.map((obj, index) => {
        return new FormControl(obj[0], obj[1] ? obj[1] : formControlArray.controls[index]?.validators ? formControlArray.controls[index].validators : [], formControlArray)
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

    this.value = value;
    //patchValue can only patch values of the control. do not send validators as a parameter.
    this.patchValue = (value) => {
        formControlArray.setControls(prevControls => {
            let index = prevControls.indexOf(this);
            if (index > -1) {
                prevControls[index].value = value;
            }
            return [...prevControls]
        })
    }


    this.validators = validators;
    //patchValidators can only patch validators of the control. do not send values as a parameter.
    //Always send an array of validator functions. If array is empty it will remove existing validators.
    this.patchValidators = (validators) => {
        formControlArray.setControls(prevControls => {
            let index = prevControls.indexOf(this);
            if (index > -1) {
                prevControls[index].validators = validators;
            }
            return [...prevControls]
        })
    }


    this.touched = false;
    //patchTouched only makes touched property to true.
    this.patchTouched = () => {
        formControlArray.setControls(prevControls => {
            let index = prevControls.indexOf(this);
            if (index > -1) {
                prevControls[index].touched = true;
            }
            return prevControls
        })
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