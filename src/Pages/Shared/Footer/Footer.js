import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-primary p-4 text-white mt-4 ">
            <Container>
              <Row className="text-center">
              <Col lg={4}>
                    <h3>Naim's World</h3>
                    <p>Its a amazing and wonderful theme park</p>
                </Col>
                <Col lg={4}>
                    <h5>Home</h5>
                    <p>Home</p>
                    <p>Home</p>
                </Col>
                
                <Col>
                 <h5>Home</h5>
                 <p>About</p>
                 <p>About</p>
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Footer;