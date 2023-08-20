import { InputLabel, TextField } from "@mui/material"
import { Validators } from "../ReactiveForms/Validators"
import { useEffect } from "react"

function TextFieldReactive({ onChange, OnFocus, formControl, label, ...props }) {
    const defaultOnChange = onChange ? onChange : () => null
    const defaultOnFocus = OnFocus ? OnFocus : () => null
    const updateTouched = () => { formControl?.patchTouched(true) };
    let btns_arr = document.getElementsByTagName('button');

    useEffect(() => {
        for (let i = 0; i < btns_arr.length; i++) {
            btns_arr.item(0).addEventListener('click', updateTouched)
        }
    }, []);

    useEffect(() => () => {
        for (let i = 0; i < btns_arr.length; i++) {
            btns_arr.item(0).removeEventListener('click', updateTouched);
        }
    }, []);

    return (
        <div className={'textFieldReactive' + (props?.id ? ' ' + props.id : '')}>
            <InputLabel className={(formControl?.validators?.length > 0 && formControl.validators.indexOf(Validators.Required) > -1) ? 'afterRequired' : ''} htmlFor={props?.id ? props.id : ''}>{label ? label : ''}</InputLabel>
            <TextField value={formControl?.value?formControl.value:''} {...props}
                onFocus={() => {
                    updateTouched();
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