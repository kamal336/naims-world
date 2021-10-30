import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from './../../context/useAuth';
import './Booking.css'
import { useHistory } from 'react-router-dom';

const Booking = () => {
    const {user} = useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {id} = useParams();
    const [singleRide,setSingleRide] = useState({});
    const history = useHistory();

    useEffect(()=>{
        fetch(`http://localhost:7000/rides/${id}`)
        .then(res=> res.json())
        .then(data=> setSingleRide(data))
    },[id])

    // send data to database 
    const onSubmit = data => {
        data.email = `${user.email}`;
        data.rideName = `${singleRide.title}`
        console.log(data);
       fetch('http://localhost:7000/booking',{
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
            <h1 className="text-center fw-bold text-primary mt-3">Event Register</h1>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="text-center fw-bold" defaultValue={singleRide.title} {...register("rideName")} />
    
            <input type="text" {...register("name")} placeholder="Your name"/>
            <input type="number" {...register("age")} placeholder="Your age"/>
            
            {/* <input type="email" {...register("email", { required: true })} placeholder="email"/> */}
            <input type="text" {...register("address", { required: true })} placeholder="Your address"/>

            <input type="number" {...register("number", { required: true })} placeholder="Mobile number"/>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input className="btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default Booking;