import { Alert, Button, Card, CardActions, CardContent, CardHeader, InputLabel, Snackbar } from '@mui/material';
import './Login.css';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { Validators } from '../../Global/ReactiveForms/Validators';
import { FormGroup } from '../../Global/ReactiveForms/FormGroup';
import { useState } from 'react';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive/TextFieldReactive';
import { ErrorText } from '../../Global/TextFieldReactive/ErrorText/ErrorText';
import { FormControlArray } from '../../Global/ReactiveForms/FormControlArray';

function Login() {
    let group = new FormGroup({
        userName: ['', [Validators.Required, Validators.Pattern(strObjects.username_regex)]],
        password: ['', [Validators.Required, Validators.Pattern(strObjects.password_regex)]]
    })
    const [openSnackBar1, setOpenSnackbar1] = useState(false);
    const [openSnackBar2, setOpenSnackbar2] = useState(false);
    const login = () => {
        if (group.invalid) {
            setOpenSnackbar1(true);
        }
        else {
            setOpenSnackbar2(true);
        }
    }

    let formArray = new FormControlArray([
        ['a', []],
        ['b', []]
    ])
    const addControl = () => {
        formArray.pushControl(['m',[Validators.Email]]);
        formArray.controls[1].patchValue('z');
        formArray.removeControlsAt(2);
    }

    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer fW300">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <InputLabel className='mt15 required' htmlFor="user_name">{strObjects.username}</InputLabel>
                        <TextFieldReactive size='small' id="user_name" variant="outlined"
                            placeholder={strObjects.place_holder_username} formControl={group.controls.userName}
                            error={group.controls.userName.invalid && group.controls.userName.touched} />
                        <ErrorText errorcond={group.controls.userName.invalid && group.controls.userName.touched}
                            errortext={strObjects.enter_a_valid_username} className="mb15"></ErrorText>

                        <InputLabel className='mt15 required' htmlFor="password">{strObjects.password}</InputLabel>
                        <TextFieldReactive autoComplete='new-password' type='password' size='small' id="password" variant="outlined"
                            placeholder={strObjects.place_holder_password} formControl={group.controls.password}
                            error={group.controls.password.invalid && group.controls.password.touched} />
                        <ErrorText errorcond={group.controls.password.invalid && group.controls.password.touched}
                            errortext={strObjects.enter_a_valid_password}></ErrorText>
                    </CardContent>
                    <CardActions>
                        <div className='W100'>
                            <div className='V_Center H_Center W100'>
                                <Button disabled={group.invalid} className='W100 btn-submit' color='primary' variant='contained'
                                    size="small" onClick={login}>{strObjects.login}</Button>
                            </div>
                            <div className='V_Center H_Center W100'>
                                <Link to="/signup"><Button color='primary' variant='text' size="small">{strObjects.signup}</Button></Link>
                            </div>
                        </div>
                    </CardActions>
                    {/* <Button onClick={onClick}>
                        Patch
                    </Button> */}
                </Card>
            </div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackBar1}
                autoHideDuration={4000} onClose={() => { setOpenSnackbar1(false) }}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {strObjects.please_provide_all_the_inputs_properly}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackBar2}
                autoHideDuration={4000} onClose={() => { setOpenSnackbar2(false) }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {strObjects.success_message}
                </Alert>
            </Snackbar>
            <Button onClick={addControl}>Push</Button>
        </div>
    )
}

export default Login;