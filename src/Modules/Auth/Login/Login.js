import { Alert, Button, Card, CardActions, CardContent, CardHeader, Snackbar } from '@mui/material';
import './Login.css';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { Validators } from '../../Global/ReactiveForms/Validators';
import { FormGroup } from '../../Global/ReactiveForms/FormGroup';
import { useState } from 'react';

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
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer fW300">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <TextFieldReactive label={strObjects.username} size='small' className='mt5' id="username" variant="outlined"
                            placeholder={strObjects.place_holder_username} formControl={group.controls.userName}
                            error={group.controls.userName.invalid && group.controls.userName.touched}
                            errortextcond={group.controls.userName.invalid && group.controls.userName.touched}
                            errortext={strObjects.enter_a_valid_username} mbottom='mb15' mtop='mt5' />
                        <TextFieldReactive label={strObjects.password} size='small' className='mt5' id="password" variant="outlined"
                            placeholder={strObjects.place_holder_password} formControl={group.controls.password}
                            error={group.controls.password.invalid && group.controls.password.touched}
                            errortextcond={group.controls.password.invalid && group.controls.password.touched}
                            errortext={strObjects.enter_a_valid_password} mbottom='mb15' mtop='mt5' />
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
        </div>
    )
}

export default Login;