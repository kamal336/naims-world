import React, { useState } from 'react';
import useAuth from '../../../context/useAuth';
import { Link, useHistory,useLocation } from "react-router-dom";


const Login = () => {
    const {signInGoogle,loginUser,setUser,setError,setIsLoading} = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    
    // register by email and password 
    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(email,password)
        .then((res) => {
            setIsLoading(true)
              setUser(res.user);
              history.push(redirect_uri)
              window.location.reload();
            })
            .catch((error) => {
              setError(error.message);
            })
            .finally(() => {
              setIsLoading(false)
            })
       
    };

     // google signin redirect 
       const googleSignInMethod = () =>{
           signInGoogle()
          .then(result=>{
              setIsLoading(true);
              setUser(result.user);
              history.push(redirect_uri);
          })
          .catch(error=>{
              setError(error.message)
          })
          .finally(()=>{
              setIsLoading(false);
          })
     }

    return (
        <div className="booking">
        <form onSubmit={handleSubmit}>
        <h1 className="text-center fw-bold text-light mt-3">Please Login</h1>

        <input onBlur={handleEmailChange} type="email" placeholder="Your email"/>
        <input onBlur={handlePasswordChange} type="password"  placeholder="Your password"/>
        
        <input className="btn-primary" type="submit" value="Login"/>
        </form>

        <div className="text-center mt-4 mb-5">
         <Link className="text-decoration-none d-block mb-4 text-light" to="/register">New in Naim's World? Creat an account!!</Link>
        <span onClick={googleSignInMethod}  className="bg-light p-2 rounded me-3"><img
        width="20px" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Google</span>

        <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" /> Github</span>

        <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1635644103~hmac=278562d0d61effc92f5539a51d87cd3e" alt="" /> Facebook</span>
        </div>
    </div>
    );
};

export default Login;