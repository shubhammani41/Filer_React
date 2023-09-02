import { Typography } from "@mui/material"
import './ErrorText.css'

function ErrorText({ errorcond, errortext, ...props }) {
    return (
        <div className="errorText">
            {errorcond ? (<Typography {...props}> {errortext} </Typography>) : null}
        </div>
    )
}

export { ErrorText }