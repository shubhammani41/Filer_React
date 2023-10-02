import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import './TextFieldReactive.css'
import { Visibility, VisibilityOff } from "@mui/icons-material"

//Takes props to generate an MUI Textfield. fromControl prop takes a FormControl Object.
//Takes onChange and OnFocus props to perform any custom operations
function TextFieldReactive({ onChange, OnFocus, formControl, type, ...props }) {
    const defaultOnChange = onChange ? onChange : () => null
    const defaultOnFocus = OnFocus ? OnFocus : () => null
    const updateTouched = () => {
        formControl?.patchTouched(true)
    };
    const patchValue = (e) => {
        formControl?.patchValue(e.target.value);
    }

    const [isTypePassword, setIsTypePassword] = useState(type === 'password' ? true : false);


    // to mark the controls property as touched when submit btn is clicked
    useEffect(() => {
        // let btns_arr = document.getElementsByClassName('btn-submit');
        // for (let i = 0; i < btns_arr.length; i++) {
        //     btns_arr.item(0).addEventListener('click', updateTouched)
        // }
        let root = document.getElementById('root');
        root.addEventListener('click', updateTouched);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formControl]);

    // to remove listeners when page is destroyed.
    useEffect(() => () => {
        // let btns_arr = document.getElementsByClassName('btn-submit');
        // for (let i = 0; i < btns_arr.length; i++) {
        //     btns_arr.item(0).removeEventListener('click', updateTouched);
        // }
        let root = document.getElementById('root');
        root.removeEventListener('click', updateTouched);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={'reactiveInputContainer' + (props?.className ? ' ' + props.className : '') + (type === 'password' ? ' passwordInputContainer' : '')}>
            <TextField value={formControl?.value ? formControl.value : ''} {...props} type={isTypePassword === true ? 'password' : 'text'}
                onFocus={() => {
                    updateTouched();
                    if (defaultOnFocus) {
                        defaultOnFocus();
                    }
                }
                }
                onChange={(e) => {
                    patchValue(e);
                    if (defaultOnChange) {
                        defaultOnChange();
                    }
                }
                } />
            {type === 'password' ? <InputAdornment position="end" style={{ position: 'absolute', margin: '5px 10px 5px 5px' }}>
                <IconButton onClick={() => setIsTypePassword(!isTypePassword)}
                    aria-label="toggle password visibility" edge="end">
                    {isTypePassword === true ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment> : null}
        </div>
    )
}

export { TextFieldReactive }