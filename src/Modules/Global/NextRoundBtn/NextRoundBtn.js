import { Fab } from '@mui/material'
import './NextRoundBtn.css'
import { NavigateNextRounded } from '@mui/icons-material'

function NextRoundBtn() {
    return (
        <div>
            <Fab className='mb10 mr10' color="primary" aria-label="add">
                <NavigateNextRounded />
            </Fab>
        </div>
    )
}

export { NextRoundBtn };