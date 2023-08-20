import { Fab } from '@mui/material'
import './NextRoundBtn.css'
import { NavigateNextRounded } from '@mui/icons-material'

function NextRoundBtn(props) {
    return (
        <div>
            <Fab size={props?.size ? props.size : 'large'} color={props?.color ? props.color : 'primary'} className={(props?.shape ? props.shape : '') + (props?.className ? ' ' + props.className : '')} aria-label="add">
                <NavigateNextRounded />
            </Fab>
        </div>
    )
}

export { NextRoundBtn };