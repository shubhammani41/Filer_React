import { Fab } from '@mui/material'
import './PreviousRoundBtn.css'
import { NavigateBeforeRounded } from '@mui/icons-material';

function PreviousRoundBtn() {
    return (
        <div>
            <Fab className='mb10 mr10' color="primary" aria-label="add">
                <NavigateBeforeRounded />
            </Fab>
        </div>
    )
}

export { PreviousRoundBtn };