import { useContext, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { AppContext } from '../../../AppContext';
import * as React from 'react'
import { Skeleton } from '@mui/material';

const AuthGuard = (props) => {
    const [app_context_obj] = useContext(AppContext);
    useEffect(() => {

        // console.log("Auth Guard");


    }, []);

    if (props.data.isLoggedin === app_context_obj.userData.isLoggedIn) {
        return (
            <React.Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
                <React.Fragment>{props.component}</React.Fragment>
            </React.Suspense>)
    }
    else {
        return <Navigate to="/login" />
    }

}

export default AuthGuard;