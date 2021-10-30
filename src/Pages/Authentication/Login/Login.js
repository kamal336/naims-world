import React from 'react';
import useAuth from '../../../context/useAuth';
import { useHistory,useLocation } from "react-router-dom";

const Login = () => {
    const {signInGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const googleSignInMethod = () =>{
        signInGoogle()
       .then(result=>{
           history.push(redirect_uri);
       })
    }
    return (
        <div>
           <h1>LOGIN</h1> 
           <button onClick={googleSignInMethod}>Google</button>
        </div>
    );
};

export default Login;