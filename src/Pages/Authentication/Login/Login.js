import React from 'react';
import useAuth from '../../../context/useAuth';
import { useHistory,useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
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

     // send data to database 
     const onSubmit = data => {

        console.log(data);

       fetch('https://desolate-reaches-24885.herokuapp.com/booking',{
           method: 'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=> res.json())
       .then(data=>{
           if(data.insertedId){
               alert("Added event successfully")
               reset();
               history.push("/home")
           }
       })
   };
    return (
        <div className="booking">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center fw-bold text-light mt-3">Please Login</h1>
            {/* register your input into the hook by invoking the "register" function */}
    
            <input type="text" {...register("name")} placeholder="Your name"/>
            <input type="email" {...register("email")} placeholder="Your email"/>
            
            {/* <input type="email" {...register("email", { required: true })} placeholder="email"/> */}
            <input type="password" {...register("password", { required: true })} placeholder="Your password"/>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input className="btn-primary" type="submit" value="Register"/>
            </form>

            <div className="text-center mt-4 mb-5">

            <span onClick={googleSignInMethod}  className="bg-light p-2 rounded me-3"><img
            width="20px" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Google</span>

            <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" /> Github</span>

            <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1635644103~hmac=278562d0d61effc92f5539a51d87cd3e" alt="" /> Facebook</span>
            </div>
        </div>
    );
};

export default Login;