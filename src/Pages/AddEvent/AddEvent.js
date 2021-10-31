import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const history = useHistory();

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
            <h1 className="text-center fw-bold text-light mt-3">Register New Event</h1>
            {/* register your input into the hook by invoking the "register" function */}
        
            <input type="text" {...register("title")} placeholder="Ride name"/>
        
            <input type="text" {...register("desc", { required: true })} placeholder="Ride description"/>

            <input type="text" {...register("img", { required: true })} placeholder="Image Link"/>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input className="btn-primary" type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default AddEvent;