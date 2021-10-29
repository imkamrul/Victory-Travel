import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand as={Link} to="/">𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>
                        <Nav.Link as={Link} to="/myBookings">My Bookings Bookings</Nav.Link>
                        <Nav.Link as={Link} to="/allBooking">Manage Bookings</Nav.Link>
                        <span className=" text-light pt-2 px-2 fw-lighter ">{user.displayName}</span>
                        {user.email ? <Button variant="warning" onClick={logOut} className="m-1 text-white">Log Out</Button>
                            : <NavLink to="/login"><Button variant="outline-info mt-1">Log In</Button></NavLink>}
                        {/* <Nav.Link as={Link} to="/login">
                            <Button variant="primary">Log In</Button>
                        </Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;