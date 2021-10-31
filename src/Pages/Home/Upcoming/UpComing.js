import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UpComing = (props) => {
    const {title,img} = props.upcoming;
    return (
        <Col lg={3} md={6}>
         <Card className="mt-3">
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-primary">
                <Card.Title className="text-warning fw-bold text-center">{title}</Card.Title>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default UpComing;