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
            <TextField className='mb15' id="name" variant="outlined" placeholder={strObjects.entershortname} />
            <InputLabel htmlFor="email">{strObjects.email}</InputLabel>
            <TextField id="email" variant="outlined" placeholder={strObjects.enteremail} />
        </div>,
        <div>
            <InputLabel htmlFor="username">{strObjects.username}</InputLabel>
            <TextField className='mb15' id="username" variant="outlined" placeholder={strObjects.enterusername} />
            <InputLabel htmlFor="password">{strObjects.passowrd}</InputLabel>
            <TextField id="password" variant="outlined" placeholder={strObjects.enterpassword} />
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
                                <NextRoundBtn></NextRoundBtn>
                            </div> : ''}
                            {(pageVal > 0) ? <div onClick={() => { previousPage() }}>
                                <PreviousRoundBtn></PreviousRoundBtn>
                            </div> : ''}
                            {(pageVal == pageArr.length - 1) ? <Button className='p15 btnWithStyle'
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