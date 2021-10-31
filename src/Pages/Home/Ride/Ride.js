import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const {_id,title,img,desc,price} = props.ride;
    return (
        <Col lg={3} md={6}>
         <Card className="mt-3">
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-primary">
                <Card.Title style={{fontSize:"25px"}} className="text-warning fw-bold text-center">{title}</Card.Title>
                <Card.Text className="text-light">
                 {desc}
                </Card.Text>
                <Button className="me-5 fw-bold" variant="light">{price} Tk</Button>
                <Link to={`/booking/${_id}`}>
                <Button className="ms-5" variant="warning">Book Now</Button>
                </Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Ride;