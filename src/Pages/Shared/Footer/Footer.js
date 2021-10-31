import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-primary p-4 text-white mt-4 ">
            <Container>
              <Row className="text-center">
              <Col lg={4}>
                    <h4 style={{fontFamily:'-moz-initial',fontSize:"24px",fontWeight:"500"}}>Naim's World</h4>
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
              <Row className="text-center">
                  <p>CopyRight &copy; 2021 Naim's World. All Rights Reserved.</p>
              </Row>
            </Container>
        </div>
    );
};

export default Footer;