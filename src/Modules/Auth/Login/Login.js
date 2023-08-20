import { Button, Card, CardActions, CardContent, CardHeader, InputLabel, TextField } from '@mui/material';
import './Login.css';
// import { useNavigate } from 'react-router-dom';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { FormControl } from '../../Global/ReactiveForms/FormControl';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { Validators } from '../../Global/ReactiveForms/Validators';
import { FormGroup } from '../../Global/ReactiveForms/FormGroup';

function Login() {
    let userName = new FormControl('', [Validators.Required]);
    let password = new FormControl('', []);
    let group = new FormGroup({
        name:['',[Validators.Required]],
    })
    const patchGroup = () => {
        password.patchValidators([Validators.Required]);
        group.patchGroup({name:['m']})
    }
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <TextFieldReactive label={strObjects.username} size='small' className='mb15 mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_username}
                            formControl={userName} error={userName.invalid && userName.touched} />
                        <TextFieldReactive label={strObjects.passowrd} size='small' className='mb15 mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_password}
                            formControl={password} error={password.invalid && password.touched} />
                        {/* <InputLabel htmlFor="password">{strObjects.passowrd}</InputLabel>
                        <TextField size='small' className="mt5" id="password" variant="outlined" placeholder={strObjects.place_holder_password} /> */}
                    </CardContent>
                    <CardActions>
                        <div className='W100'>
                            <div className='V_Center H_Center W100'>
                                <Button className='W100 btn-submit' color='primary' variant='contained' size="small">{strObjects.login}</Button>
                            </div>
                            <div className='V_Center H_Center W100'>
                                <Link to="/signup"><Button color='primary' variant='text' size="small">{strObjects.signup}</Button></Link>
                            </div>
                            <button onClick={() => { patchGroup() }}>
                                patch
                            </button>
                        </div>
                    </CardActions>
                </Card>

                {/* <Button onClick={() => errorPage()}>Error</Button> */}
            </div>
        </div>
    )
}

export default Login;