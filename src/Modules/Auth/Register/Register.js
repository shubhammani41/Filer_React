import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';

function Register() {
    const navigate = useNavigate();
    const errorPage = () => {
        navigate('/login/abc')
    }
    return (
        <div className="RegisterContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <InputLabel htmlFor="name">{strObjects.name}</InputLabel>
                        <TextField id="name" variant="outlined" />
                        <InputLabel htmlFor="email">{strObjects.email}</InputLabel>
                        <TextField id="email" variant="outlined" />

                        <InputLabel htmlFor="username">{strObjects.username}</InputLabel>
                        <TextField id="username" variant="outlined" />
                        <InputLabel htmlFor="password">{strObjects.passowrd}</InputLabel>
                        <TextField id="password" variant="outlined" />
                    </CardContent>
                    <CardActions>
                        <div className='V_Center H_Center W100'>
                            <Button color='primary' variant='contained' size="small">{strObjects.login}</Button>
                        </div>
                    </CardActions>
                </Card>

                {/* <Button onClick={() => errorPage()}>Error</Button> */}
            </div>
        </div>
    )
}

export default Register;