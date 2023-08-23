//some common validator functions that return true or false.
const Validators = {
    Required: (value) => {
        return value ? true : false;
    },
    Email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },

    //can take a regex literal or a regex string that is escape properly
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
        return function (value) {
            return regex.test(value);
        };
    },
    Number: (value) => {
        return (typeof (value) === 'number') ? true : false;
    },
    Integer: (value) => {
        return (Number.isInteger(value)) ? true : false;
    },
    MinLength: (length) => {
        return function (value) {
            return (value?.length >= length) ? true : false;
        }
    },
    MaxLength: (length) => {
        return function (value) {
            return (value?.length <= length) ? true : false;
        }
    },
    Min: (val) => {
        return function (value) {
            if (isNaN(parseFloat(value))) {
                return (value >= parseFloat(val)) ? true : false;
            }
            else return false;
        }
    },
    Max: (val) => {
        return function (value) {
            if (isNaN(parseFloat(value))) {
                return (value <= parseFloat(val)) ? true : false;
            }
            else return false;
        }
    },

    //allows you to provide a custom function that will return true or false for validation
    customValidatorFn: (fn) => {
        return function (value) {
            console.log(fn)
            return fn ? true : false
        }
    }
}

export { Validators }