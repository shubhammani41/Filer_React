import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Login.css';

function Login() {
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{backgroundColor:'primary.main', color:'primary.contrastText'}} title="Login"></CardHeader>
                    <CardContent>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <TextField id="username" variant="outlined" />
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <TextField id="password" variant="outlined" />
                    </CardContent>
                    <CardActions>
                        <div className='FlexBox V_Center H_Center W100'>
                            <Button color='primary' variant='contained' size="small">Learn More</Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Login;