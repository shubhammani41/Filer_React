import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Login.css';
// import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { FormControl } from '../../Global/ReactiveForms/FormControl';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { Validators } from '../../Global/ReactiveForms/Validators';

function Login() {
    // const navigate = useNavigate();
    // const errorPage = () => {
    //     navigate('/login/abc')
    // }

    let userName = new FormControl('', [Validators.Required])
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <TextFieldReactive label={strObjects.username} size='small' className='mb15 mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_username}
                            formControl={userName} error={userName.invalid && userName.touched}/>
                        <InputLabel htmlFor="password">{strObjects.passowrd}</InputLabel>
                        <TextField size='small' className="mt5" id="password" variant="outlined" placeholder={strObjects.place_holder_password} />
                    </CardContent>
                    <CardActions>
                        <div className='W100'>
                            <div className='V_Center H_Center W100'>
                                <Button className='W100' color='primary' variant='contained' size="small">{strObjects.login}</Button>
                            </div>
                            <div className='V_Center H_Center W100'>
                                <Link to="/signup"><Button color='primary' variant='text' size="small">Signup</Button></Link>
                            </div>
                        </div>
                    </CardActions>
                </Card>

                {/* <Button onClick={() => errorPage()}>Error</Button> */}
            </div>
        </div>
    )
}

export default Login;