import { React, useContext, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { AppContext } from '../../../AppContext';

const AuthGuard = (props) => {
    const [app_context_obj] = useContext(AppContext);
    useEffect(() => {

        // console.log("Auth Guard");


    }, []);

    if (props.data.isLoggedin === app_context_obj.userData.isLoggedIn) {
        return <React.Fragment>{props.component}</React.Fragment>
    }
    else {
        return <Navigate to="/login" />
    }

}

export default AuthGuard;