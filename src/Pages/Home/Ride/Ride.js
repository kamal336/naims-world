import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const {_id,title,img,desc} = props.ride;
    return (
        <Col>
         <Card lg={4} md={6}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {desc}
                </Card.Text>
                <Link to={`/booking/${_id}`}>
                <Button variant="primary">Book Now</Button>
                </Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Ride;