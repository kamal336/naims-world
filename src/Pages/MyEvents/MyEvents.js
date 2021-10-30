import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
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
    console.log(myEvents);
    return (
       <Container className="mt-5">
           <h1 className="my-3 text-light fw-bold text-center">Event List</h1>
          <Table striped bordered hover className="bg-info text-white">
                  <thead  className="p-3">
                    <tr>
                        <th>Ride Name</th>
                        <th>Customer Name</th>
                        <th>Age</th>
                        <th>Number</th>
                       </tr>
                       </thead>
                       <tbody className="p-3">
                       {
                           myEvents.map(myevent=>(
                            <tr>
                            <td>{myevent?.rideName}</td>
                            <td>{myevent?.name}</td>
                            <td>{myevent?.age}</td>
                            <td>{myevent?.number}</td>
                            </tr>
                           ))
                       }
                    </tbody>
                    </Table>
       </Container>
    );
};

export default MyEvents;