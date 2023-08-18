import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';
import { NextRoundBtn } from '../../Global/NextRoundBtn/NextRoundBtn';
import { PreviousRoundBtn } from '../../Global/PreviousRoundBtn/PreviousRoundBtn';
import { useState } from 'react';

function Register() {
    const navigate = useNavigate();
    const [pageVal, setPageVal] = useState(0);
    const nextPage = () => {
        setPageVal(pageVal + 1);
    }
    const previousPage = () => {
        setPageVal(pageVal - 1);
    }
    const registerUser = () => {
        console.log("fired")
    }
    const pageArr = [
        <div>
            <InputLabel htmlFor="name">{strObjects.name}</InputLabel>
            <TextField size='small' className='mb15 mt5' id="name" variant="outlined" placeholder={strObjects.place_holder_full_name} />
            <InputLabel htmlFor="email">{strObjects.email}</InputLabel>
            <TextField size='small' className='mt5' id="email" variant="outlined" placeholder={strObjects.place_holder_email} />
        </div>,
        <div>
            <InputLabel htmlFor="username">{strObjects.username}</InputLabel>
            <TextField size='small' className='mb15 mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_username} />
            <InputLabel htmlFor="password">{strObjects.passowrd}</InputLabel>
            <TextField size='small' className='mt5' id="password" variant="outlined" placeholder={strObjects.place_holder_password} />
        </div>
    ]
    return (
        <div className="RegisterContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        {pageArr[pageVal]}
                    </CardContent>
                    <CardActions>
                        <div className='V_Center H_Center W100'>
                            {(pageVal < pageArr.length - 1) ? <div onClick={() => { nextPage() }}>
                                <div className='mb10'>
                                    <NextRoundBtn size="small" shape="rectangle"></NextRoundBtn>
                                </div>
                            </div> : ''}
                            {(pageVal > 0) ? <div onClick={() => { previousPage() }}>
                                <div className='mb10 mr10'>
                                    <PreviousRoundBtn size="small" shape="rectangle"></PreviousRoundBtn>
                                </div>
                            </div> : ''}
                            {(pageVal == pageArr.length - 1) ? <Button
                                onClick={() => { registerUser() }} color='primary' variant='contained' size="small">
                                Register
                            </Button> : ''}
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Register;