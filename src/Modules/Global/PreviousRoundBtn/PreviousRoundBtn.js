import { Fab } from '@mui/material'
import './PreviousRoundBtn.css'
import { NavigateBeforeRounded } from '@mui/icons-material';

function PreviousRoundBtn(props) {
    return (
        <div>
            <Fab size={props?.size?props.size:'large'} color={props?.color?props.color:'primary'} className={(props?.shape?props.shape:'')} aria-label="add">
                <NavigateBeforeRounded />
            </Fab>
        </div>
    )
}

export { PreviousRoundBtn };