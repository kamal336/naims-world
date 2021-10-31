import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UpComing from '../Upcoming/UpComing';

const UpcomingEvents = () => {
    const [upComings,setUpComings] = useState([]);

    useEffect(()=>{
        fetch("https://desolate-reaches-24885.herokuapp.com/upcomingrides")
        .then(res=> res.json())
        .then(data=> setUpComings(data))
    },[])
    return (
        <Container>
        <h1 className="text-center fw-bold text-light my-4">Our Upcoming Rides</h1>
        <Row>
            {
                upComings.map(upcoming=> <UpComing 
                 key={upcoming._id}
                 upcoming={upcoming}
                />)
            }
        </Row>
    </Container>
    );
};

export default UpcomingEvents;