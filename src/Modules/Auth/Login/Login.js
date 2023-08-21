import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import './Login.css';
// import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { FormControl } from '../../Global/ReactiveForms/FormControl';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { Validators } from '../../Global/ReactiveForms/Validators';

function Login() {
    let userName = new FormControl('m', []);
    let password = new FormControl('', [Validators.Required]);
    const onClick = () => {
        userName.patchValue('');
        userName.patchValidators([Validators.Required])
    }
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <TextFieldReactive label={strObjects.username} size='small' className='mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_username}
                            formControl={userName} error={userName.invalid && userName.touched} errortextcond={userName.invalid && userName.touched} errortext='Enter a valid username' mbottom='mb15' mtop='mt5' />
                        <TextFieldReactive label={strObjects.password} size='small' className='mt5' id="password" variant="outlined" placeholder={strObjects.place_holder_password}
                            formControl={password} error={password.invalid && password.touched} errortextcond={password.invalid && password.touched} errortext='Enter a valid password' mbottom='mb15' mtop='mt5'/>
                    </CardContent>
                    <CardActions>
                        <div className='W100'>
                            <div className='V_Center H_Center W100'>
                                <Button className='W100 btn-submit' color='primary' variant='contained' size="small">{strObjects.login}</Button>
                            </div>
                            <div className='V_Center H_Center W100'>
                                <Link to="/signup"><Button color='primary' variant='text' size="small">{strObjects.signup}</Button></Link>
                            </div>
                        </div>
                    </CardActions>
                    <Button onClick={onClick}>
                        Patch
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Login;