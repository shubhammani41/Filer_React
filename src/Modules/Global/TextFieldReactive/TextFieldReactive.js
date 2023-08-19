import { InputLabel, TextField } from "@mui/material"
import { Validators } from "../ReactiveForms/Validators"

function TextFieldReactive({ onChange, OnFocus, formControl, label, ...props }) {
    const defaultOnChange = onChange ? onChange : () => null
    const defaultOnFocus = OnFocus ? OnFocus : () => null
    return (
        <div className={'textFieldReactive' + (props?.id ? ' ' + props.id : '')}>
            <InputLabel className={(formControl?.validators?.length > 0 && formControl.validators.indexOf(Validators.Required) > -1) ? 'afterRequired' : ''} htmlFor={props?.id ? props.id : ''}>{label ? label : ''}</InputLabel>
            <TextField value={formControl.value} {...props}
                onFocus={() => {
                    formControl?.patchTouched(true);
                    if (defaultOnFocus) {
                        defaultOnFocus();
                    }
                }
                }
                onChange={(e) => {
                    formControl?.patchValue(e.target.value);
                    if (defaultOnChange) {
                        defaultOnChange();
                    }
                }
                }
                error={props?.error ? props.error : false} />
        </div>
    )
}

export { TextFieldReactive }