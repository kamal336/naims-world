import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OtherService = (props) => {
    const {title,img} = props.otherservice;
    return (
        <Col lg={3} md={6}>
         <Card className="mt-3">
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="bg-primary">
                <Card.Title className="text-warning fw-bold text-center">{title}</Card.Title>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default OtherService;