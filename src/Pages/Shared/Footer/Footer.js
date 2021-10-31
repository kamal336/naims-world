import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-primary p-4 text-white mt-4">
            <Container>
              <Row className="text-center">
              <Col lg={4}>
                    <h4 style={{fontFamily:'-moz-initial',fontSize:"24px",fontWeight:"500"}}>Naim's World</h4>
                    <p>It's a amazing and wonderful theme park.</p>
                     <p>It's also a world class theme park forever.</p>
                </Col>
                <Col lg={4}>
                    <h5>Home</h5>
                    <p>My Events</p>
                    <p>Manage Event</p>
                </Col>
                
                <Col lg={4}>
                <div>
                    <i class="fab fa-facebook-square icon"></i>
                    <i class="fab fa-youtube-square icon"></i>
                    <i class="fab fa-twitter icon"></i>
                    <i class="fab fa-instagram-square icon"></i>
                    <i class="fab fa-linkedin icon"></i>
                </div>
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