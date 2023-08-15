import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, Typography } from '@mui/material';
import './NotFound.css'
import { strObjects } from '../../../Constants/StringConstants';
function NotFound() {
    return (
        <div className="NotFoundContainer">
            <div className="NotFoundCardContainer">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main' }} title="Error!"></CardHeader>
                    <CardContent>
                        <div className="V_Center H_Center">
                            <Typography className="ultraHugeText m0 p0" sx={{ color: 'primary.main' }}>{strObjects.error_404}
                            </Typography>
                        </div>
                        <div className="V_Center H_Center">
                            <div className='medPara'>
                                <Typography className='bolderText'>{strObjects.uh_oh_you_re_lost}
                                </Typography>
                                <Typography>
                                    {strObjects.the_page_you_are_looking_for}
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className='V_Center H_Center W100'>
                            <Button color='primary' variant='contained' size="small">Home</Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default NotFound;