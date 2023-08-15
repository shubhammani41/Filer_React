import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';

function Login() {
    const navigate = useNavigate();
    const errorPage = () => {
        navigate('/login/abc')
    }
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
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

export default Login;