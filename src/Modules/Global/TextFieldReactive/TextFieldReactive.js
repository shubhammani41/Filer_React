import { InputLabel, TextField, Typography } from "@mui/material"
import { Validators } from "../ReactiveForms/Validators"
import { useEffect } from "react"
import './TextFieldReactive.css'

//Takes props to generate an MUI Textfield. fromControl prop takes a FormControl Object.
//error prop takes error condition to mark field as red.
//errortextcond takes an error condition that must return true when to display an error text.
//error text takes a string to display as text when errortextcondition evaluates to true.
//mbottom and mtop take className strings to apply margin top and bottom respectively.
function TextFieldReactive({ onChange, OnFocus, formControl, label, mbottom, errortextcond, errortext,mtop, ...props }) {
    const defaultOnChange = onChange ? onChange : () => null
    const defaultOnFocus = OnFocus ? OnFocus : () => null
    const updateTouched = () => { formControl?.patchTouched(true) };


    // to mark the controls property as touched when submit btn is clicked
    useEffect(() => {
        // let btns_arr = document.getElementsByClassName('btn-submit');
        // for (let i = 0; i < btns_arr.length; i++) {
        //     btns_arr.item(0).addEventListener('click', updateTouched)
        // }
        let root = document.getElementById('root');
        root.addEventListener('click',updateTouched);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // to remove listeners when page is destroyed.
    useEffect(() => () => {
        // let btns_arr = document.getElementsByClassName('btn-submit');
        // for (let i = 0; i < btns_arr.length; i++) {
        //     btns_arr.item(0).removeEventListener('click', updateTouched);
        // }
        let root = document.getElementById('root');
        root.removeEventListener('click',updateTouched);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={'textFieldReactive' + (props?.id ? ' ' + props.id : '')}>
            <InputLabel className={((formControl?.validators?.length > 0 && formControl.validators.indexOf(Validators.Required) > -1) ? 'afterRequired ' : ' ') + (mtop?mtop:'')} htmlFor={props?.id ? props.id : ''}>{label ? label : ''}</InputLabel>
            <TextField value={formControl?.value ? formControl.value : ''}
                error={props?.error ? props.error : false}
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
            {((errortextcond?errortextcond:false) && errortext) ? <Typography className={"errorText" + (mbottom ? (' ' + mbottom) : '')}>{errortext ? errortext : ''}</Typography> :
             <div className={mbottom?mbottom:''}></div>}
        </div>
    )
}

export { TextFieldReactive }