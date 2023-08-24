//some common validator functions that return true or false.
const Validators = {
    Required: (value) => {
        return value ? true : false;
    },
    Email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },

    //can take a regex literal or a regex string that is escaped properly
    Pattern: (pattern) => {
        let regex;

        if (pattern instanceof RegExp) {
            regex = pattern;
        } else if (typeof pattern === 'string') {
            try {
                regex = new RegExp(pattern);
            } catch (error) {
                throw new Error('Invalid regex string');
            }
        } else {
            throw new Error('Invalid pattern type');
        }
        const Pattern = (value) => {
            return regex.test(value);
        }
        return Pattern;
    },
    Number: (value) => {
        return (typeof (value) === 'number') ? true : false;
    },
    Integer: (value) => {
        return (Number.isInteger(value)) ? true : false;
    },
    MinLength: (length) => {
        const MinLength = (value) => {
            return (value?.length >= length) ? true : false;
        }
        return MinLength;
    },
    MaxLength: (length) => {
        const MaxLength = (value) => {
            return (value?.length <= length) ? true : false;
        }
        return MaxLength;
    },
    Min: (val) => {
        const Min = (value) => {
            if (isNaN(parseFloat(value))) {
                return (value >= parseFloat(val)) ? true : false;
            }
            else return false;
        }
        return Min;
    },
    Max: (val) => {
        const Max = (value) => {
            if (isNaN(parseFloat(value))) {
                return (value <= parseFloat(val)) ? true : false;
            }
            else return false;
        }
        return Max;
    },

    //allows you to provide a custom function that will return true or false for validation.
    //Takes a key value pair with fn key having the refrence of a custom function and args having an array of static arguments. 
    //Note if the arguments of the customFn change then the validation will not update. It is meant only for static arguments
    customValidatorFn: (customFn) => {
        const { fn, args } = customFn;
        const customValidatorFn = (value) => {
            return fn(...args);
        }
        return customValidatorFn;
    }
}

export { Validators }