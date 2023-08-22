import { Alert, Button, Card, CardActions, CardContent, CardHeader, Snackbar, Typography } from '@mui/material';
import './Register.css';
import { strObjects } from '../../../Constants/StringConstants';
import { PreviousRoundBtn } from '../../Global/PreviousRoundBtn/PreviousRoundBtn';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigateNextRounded } from '@mui/icons-material';
import { Validators } from '../../Global/ReactiveForms/Validators';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { FormGroup } from '../../Global/ReactiveForms/FormGroup';

function Register() {
    const [pageVal, setPageVal] = useState(0);
    const [openSnackBar1, setOpenSnackbar1] = useState(false);
    const [openSnackBar2, setOpenSnackbar2] = useState(false);
    const nextPage = () => {
        if (group.controls.firstName.invalid || group.controls.email.invalid) {
            setOpenSnackbar1(true);
        }
        else {
            setPageVal(pageVal + 1);
        }
    }
    const previousPage = () => {
        setPageVal(pageVal - 1);
    }
    const registerUser = () => {
        if (group.invalid) {
            setOpenSnackbar1(true);
        }
        else {
            setOpenSnackbar2(true);
        }
    }
    let group = new FormGroup({
        firstName: ['', [Validators.Required]],
        lastName: ['', []],
        email: ['', [Validators.Required, Validators.Email]],
        userName: ['', [Validators.Required, Validators.Pattern(strObjects.username_regex)]],
        password: ['', [Validators.Required, Validators.Pattern(strObjects.password_regex)]],
        confirmPassword: ['', [Validators.Required, Validators.Pattern(strObjects.password_regex)]]
    })
    const pageArr = [
        <div>
            <TextFieldReactive label={strObjects.first_name} size='small' className='mt5' id="first_name" variant="outlined"
                placeholder={strObjects.place_holder_first_name} formControl={group.controls.firstName}
                error={group.controls.firstName.invalid && group.controls.firstName.touched}
                errortextcond={group.controls.firstName.invalid && group.controls.firstName.touched}
                errortext={strObjects.enter_a_first_name} mbottom='mb15' mtop='mt5' />

            <TextFieldReactive label={strObjects.last_name} size='small' className='mt5' id="last_name" variant="outlined"
                placeholder={strObjects.place_holder_last_name}
                formControl={group.controls.lastName} mbottom='mb15' mtop='mt5' />

            <TextFieldReactive label={strObjects.email} size='small' className='mt5' id="first_name" variant="outlined"
                placeholder={strObjects.place_holder_email} formControl={group.controls.email}
                error={group.controls.email.invalid && group.controls.email.touched}
                errortextcond={group.controls.email.invalid && group.controls.email.touched}
                errortext={strObjects.enter_a_valid_email} mbottom='mb15' mtop='mt5' />
        </div>,
        <div>
            <TextFieldReactive label={strObjects.username} size='small' className='mt5' id="first_name" variant="outlined"
                placeholder={strObjects.place_holder_username} formControl={group.controls.userName}
                error={group.controls.userName.invalid && group.controls.userName.touched}
                errortextcond={group.controls.userName.invalid && group.controls.userName.touched}
                errortext={strObjects.enter_a_valid_username} mbottom='mb15' mtop='mt5' />

            <TextFieldReactive label={strObjects.password} size='small' className='mt5' id="first_name" variant="outlined"
                placeholder={strObjects.place_holder_password} formControl={group.controls.password}
                error={group.controls.password.invalid && group.controls.password.touched}
                errortextcond={group.controls.password.invalid && group.controls.password.touched}
                errortext={strObjects.enter_a_valid_password} mbottom='mb15' mtop='mt5' />

            <TextFieldReactive label={strObjects.confirm_password} size='small' className='mt5' id="first_name" variant="outlined"
                placeholder={strObjects.place_holder_password} formControl={group.controls.confirmPassword}
                error={(group.controls.confirmPassword.invalid  || group.value.password !== group.value.confirmPassword) && group.controls.confirmPassword.touched}
                errortextcond={group.controls.confirmPassword.invalid && group.controls.confirmPassword.touched}
                errortext={strObjects.enter_a_valid_password} mbottom={(group.value.password === group.value.confirmPassword) ? 'mb15' : ''} mtop='mt5' />

            {(group.value.password !== group.value.confirmPassword) ? <Typography className="errorText mb15">{strObjects.password_confrim_password_dont_match}</Typography> : null}
        </div>
    ]
    return (
        <div className="RegisterContainer">
            <div className="LandingCardContainer fW300">
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.signup}></CardHeader>
                    <CardContent>
                        {pageArr[pageVal]}
                    </CardContent>
                    <CardActions>
                        <div className='W100'>
                            <div className='V_Center H_Center W100'>
                                {(pageVal < pageArr.length - 1) ? (<Button disabled={group.controls.firstName.invalid || group.controls.email.invalid}
                                    onClick={nextPage} className='W100 btn-submit' color='primary' variant='contained' size="small">
                                    <NavigateNextRounded />
                                </Button>) : null}
                                {(pageVal > 0) ? <div onClick={previousPage}>
                                    <div className='mb10 mr10'>
                                        <PreviousRoundBtn size="small" shape="rectangle"></PreviousRoundBtn>
                                    </div>
                                </div> : null}
                                {(pageVal === pageArr.length - 1) ? <Button disabled={group.invalid || group.value.password !== group.value.confirmPassword}
                                    onClick={registerUser} className='mb10 mr10 W100 btn-submit' color='primary' variant='contained' size="small">
                                    {strObjects.signup}
                                </Button> : null}
                            </div>
                            <div className='V_Center H_Center W100'>
                                <Link to="/login"><Button color='primary' variant='text' size="small">{strObjects.login}</Button></Link>
                            </div>
                        </div>
                    </CardActions>
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

export default Register;