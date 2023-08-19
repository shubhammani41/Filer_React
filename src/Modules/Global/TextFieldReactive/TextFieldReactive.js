import { InputLabel, TextField } from "@mui/material"
import { Validators } from "../ReactiveForms/Validators"

function TextFieldReactive({ onChange, OnFocus, ...props }) {
    const defaultOnChange = onChange?onChange:()=>null
    const defaultOnFocus = OnFocus?OnFocus:()=>null
    return (
        <div className={'textFieldReactive' + (props?.id ? ' ' + props.id : '')}>
            <InputLabel className={(props?.formControl?.validators?.length > 0 && props.formControl.validators.indexOf(Validators.Required) > -1) ? 'afterRequired' : ''} htmlFor={props?.id ? props.id : ''}>{props?.label ? props.label : ''}</InputLabel>
            <TextField size={props?.size ? props.size : 'small'} className={props?.className ? props.className : ''} id={props?.id ? props.id : ''}
                variant={props?.variant ? props.variant : "outlined"} placeholder={props?.placeholder ? props.placeholder : ''}
                value={props?.formControl?.value ? props.formControl.value : ''}
                onFocus={() => {
                    props?.formControl?.patchTouched(true);
                    if(defaultOnFocus){
                        defaultOnFocus();
                    }
                }
                }
                onChange={(e) => {
                    props?.formControl?.patchValue(e.target.value);
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