import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import OtherService from './../OtherService/OtherService';

const OtherServices = () => {
    const [otherServices,setOtherServices] = useState([]);

    useEffect(()=>{
        fetch("https://desolate-reaches-24885.herokuapp.com/otherservices")
        .then(res=> res.json())
        .then(data=> setOtherServices(data))
    },[])
    return (
        <Container>
        <h1 className="text-center fw-bold text-light my-4">Our Other Services</h1>
        <Row>
            {
                otherServices.map(otherservice=> <OtherService
                 key={otherservice._id}
                 otherservice={otherservice}
                />)
            }
        </Row>
    </Container>
    );
};

export default OtherServices;