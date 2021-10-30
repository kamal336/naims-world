import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

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
        <Container className="mt-5">
        <h1 className="my-3 text-light fw-bold text-center">All Event Manage List</h1>
       <Table striped bordered hover className="bg-info text-white">
               <thead>
                 <tr className="p-4">
                     <th>Ride Name</th>
                     <th>Customer Name</th>
                     <th>Age</th>
                     <th>Number</th>
                     <th>Delete User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        manageEvents.map(event=>(
                         <tr className="p-3">
                         <td>{event?.rideName}</td>
                         <td>{event?.name}</td>
                         <td>{event?.age}</td>
                         <td>{event?.number}</td>
                         <td onClick={()=>handleDelete(event._id)}>Delete</td>
                         </tr>
                        ))
                    }
                 </tbody>
                 </Table>
    </Container>
    );
};

export default ManageEvent;