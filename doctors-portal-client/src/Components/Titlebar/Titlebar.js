import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Titlebar = () => {
    return (
        <>
            <Navbar className="pt-4">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <Nav>
                            <Link className="nav-link mr-5" to="/"> Home </Link>
                            <Nav.Link className="nav-link mr-5">About</Nav.Link>
                            <Nav.Link className="nav-link mr-5">Dental Services</Nav.Link>
                            <Nav.Link className="nav-link mr-5 text-white">Reviews</Nav.Link>
                            <Nav.Link className="nav-link mr-5 text-white">Blog</Nav.Link>
                            <Link className="nav-link mr-2 text-white" to={'/admin'}> Admin Login </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Titlebar;