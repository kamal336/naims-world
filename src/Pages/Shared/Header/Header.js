import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" sticky="top" >
            <Container>
                 <Navbar.Brand style={{fontFamily:'-moz-initial'}} className="text-white" href="#home"><img   className="rounded-circle" width="50px" src="https://cdn2.vectorstock.com/i/1000x1000/04/46/n-letter-logo-template-vector-11180446.jpg" alt="" /> Naim's World</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto">
                    <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/myevents">My Events</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/eventmanage">Manage Event</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/admin">Admin</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/addevent">AddEvent</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link> 

                   {/*  { user.email?  <Navbar.Text className="text-white border rounded px-1" >
                       Logged as: {user.displayName}
                    </Navbar.Text>:<Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                    }

                     {/* logout  */}
                    {/* {user.email&&<Nav.Link className="text-white" onClick={logOut}>Logout</Nav.Link> } */}
                   
                 
                 </Nav>
                 </Navbar.Collapse>
             </Container>
          </Navbar>
        </div>
    );
};

export default Header;