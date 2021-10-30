import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Ride from '../Ride/Ride';

const Rides = () => {
    const [rides,setRides] = useState([]);

    useEffect(()=>{
        fetch("https://desolate-reaches-24885.herokuapp.com/rides")
        .then(res=> res.json())
        .then(data => setRides(data)) 
    },[])

    return (
        <Container>
            <h1 className="text-center fw-bold text-light my-4">Our Wonderful Rides</h1>
            <Row>
                {
                    rides.map(ride=> <Ride 
                     key={ride._id}
                     ride={ride}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Rides;