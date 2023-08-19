const Validators = {
    Required: (value) => {
        return value ? true : false
    },
    Email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },
    Pattern: (pattern) => {
        const regex = new RegExp(pattern);
        return function (value) {
            return regex.test(value);
        };
    }
}

export { Validators }