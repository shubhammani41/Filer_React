import { InputLabel, TextField } from "@mui/material"
import { Validators } from "../ReactiveForms/Validators"
import { useEffect } from "react"

function TextFieldReactive({ onChange, OnFocus, formControl, label, ...props }) {
    const defaultOnChange = onChange ? onChange : () => null
    const defaultOnFocus = OnFocus ? OnFocus : () => null
    const updateTouched = () => { formControl?.patchTouched(true) };
    
    
    useEffect(() => {
        let btns_arr = document.getElementsByClassName('btn-submit');
        for (let i = 0; i < btns_arr.length; i++) {
            btns_arr.item(0).addEventListener('click', updateTouched)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => () => {
        let btns_arr = document.getElementsByClassName('btn-submit');
        for (let i = 0; i < btns_arr.length; i++) {
            btns_arr.item(0).removeEventListener('click', updateTouched);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={'textFieldReactive' + (props?.id ? ' ' + props.id : '')}>
            <InputLabel className={(formControl?.validators?.length > 0 && formControl.validators.indexOf(Validators.Required) > -1) ? 'afterRequired' : ''} htmlFor={props?.id ? props.id : ''}>{label ? label : ''}</InputLabel>
            <TextField value={formControl?.value?formControl.value:''} 
            error={formControl.invalid && formControl.touched}
            {...props}
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
                } />
        </div>
    )
}

export { TextFieldReactive }