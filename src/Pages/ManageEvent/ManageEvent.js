import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './ManageEvent.css';

const ManageEvent = () => {
    const [manageEvents,setManageEvents] = useState([]);
    
    useEffect(()=>{
        fetch("https://desolate-reaches-24885.herokuapp.com/myevents")
        .then(res=> res.json())
        .then(data=> setManageEvents(data))
    },[])
   
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
                const remainingUser = manageEvents.filter(user=> user._id !== id);
                setManageEvents(remainingUser)
            }
        })
        }
    }
    
     
    return (
        <Container className="my-5">
        <h1 className="my-3 text-light fw-bold text-center">All Event Manage List</h1>
       <Table striped bordered hover className="bg-info text-white">
               <thead>
                 <tr className="p-4">
                     <th>Ride Name</th>
                     <th>Price</th>
                     <th>Customer Name</th>
                     <th>Email</th>
                     <th>Age</th>
                     <th>Number</th>
                     <th>Address</th>
                     <th>Status</th>
                     <th>Delete User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        manageEvents.map(event=>(
                         <tr className="p-3">
                         <td>{event?.rideName}</td>
                         <td>{event?.price}</td>
                         <td>{event?.name}</td>
                         <td>{event?.email}</td>
                         <td>{event?.age}</td>
                         <td>{event?.number}</td>
                         <td>{event?.address}</td>
                         <td>{event?.status} <Button className="btn-primary"> Aprove</Button></td>
                         <td onClick={()=>handleDelete(event._id)}>
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

export default ManageEvent;