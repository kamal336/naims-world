import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import useAuth from './../../context/useAuth';

const MyEvents = () => {
    const [events,setEvents] = useState([]);
    const {user} = useAuth();
    const userEmail = `${user.email}`;
    useEffect(()=>{
        fetch("https://desolate-reaches-24885.herokuapp.com/myevents")
        .then(res=> res.json())
        .then(data=> setEvents(data))
    },[])

    const myEvents = events.filter(event=> event.email == userEmail)
    
    const handleDelete = (id) =>{
        // confirm to delete 
        const procede = window.confirm("Are sure for delete this ride")
        if(procede){
            const url = `https://desolate-reaches-24885.herokuapp.com/myevents/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert("User deleted")
                const remainingUser = myEvents.filter(user=> user._id !== id);
                setEvents(remainingUser)
            }
        })
        }
    }
    return (
       <Container className="my-5">
           <h1 className="my-3 text-light fw-bold text-center">My Event List</h1>
          <Table striped bordered hover className="bg-info text-white">
                  <thead  className="p-3">
                    <tr>
                        <th>Ride Name</th>
                        <th>Price</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Delete Event</th>
                       </tr>
                       </thead>
                       <tbody className="p-3">
                       {
                           myEvents.map(myevent=>(
                            <tr>
                            <td>{myevent?.rideName}</td>
                            <td>{myevent?.price}</td>
                            <td>{myevent?.name}</td>
                            <td>{myevent?.email}</td>
                            <td>{myevent?.age}</td>
                            <td>{myevent?.number}</td>
                            <td>{myevent?.address}</td>
                            <td>{myevent?.status} <Button className="btn-primary"> Aprove</Button></td>
                            <td onClick={()=>handleDelete(myevent._id)}>
                             <Button variant="danger">Delete</Button>
                         </td>
                            </tr>
                           ))
                       }
                    </tbody>
                    </Table>
       </Container>
    );
};

export default MyEvents;