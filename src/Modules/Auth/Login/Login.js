import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import './Login.css';
import { strObjects } from '../../../Constants/StringConstants';
import { Link } from "react-router-dom";
import { FormControl } from '../../Global/ReactiveForms/FormControl';
import { TextFieldReactive } from '../../Global/TextFieldReactive/TextFieldReactive';
import { Validators } from '../../Global/ReactiveForms/Validators';
import { FormGroup } from '../../Global/ReactiveForms/FormGroup';

function Login() {
    let group = new FormGroup({
        userName: new FormControl('m', [Validators.Required]),
        password: new FormControl('', [Validators.Required])
    })
    const onClick = () => {
        group.patchValue({
            userName:[''],
        })
    }
    return (
        <div className="LoginContainer">
            <div className="LandingCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardHeader sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} title={strObjects.welcome}></CardHeader>
                    <CardContent>
                        <TextFieldReactive label={strObjects.username} size='small' className='mt5' id="username" variant="outlined" placeholder={strObjects.place_holder_username}
                            formControl={group.controls.userName} error={group.controls.userName.invalid && group.controls.userName.touched} errortextcond={group.controls.userName.invalid && group.controls.userName.touched} errortext='Enter a valid username' mbottom='mb15' mtop='mt5' />
                        <TextFieldReactive label={strObjects.password} size='small' className='mt5' id="password" variant="outlined" placeholder={strObjects.place_holder_password}
                            formControl={group.controls.password} error={group.controls.password.invalid && group.controls.password.touched} errortextcond={group.controls.password.invalid && group.controls.password.touched} errortext='Enter a valid password' mbottom='mb15' mtop='mt5' />
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