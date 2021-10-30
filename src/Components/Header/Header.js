import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>

                <Navbar.Brand as={Link} to="/">𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="fs-4 pt-2" to="/home">Home</Nav.Link>
                        {user.email &&
                            <Nav.Link as={Link} to="/myBookings" className="fs-4 pt-2">My Bookings</Nav.Link>}


                        <Nav.Link className="fs-4 pt-2" as={HashLink} to="/home#packages">Packages</Nav.Link>
                        <Nav.Link className="fs-4 pt-2" as={HashLink} to="#contact">Contact</Nav.Link>
                        {user.email && <NavDropdown title="More" id="basic-nav-dropdown" className=" fs-4">
                            <NavDropdown.Item as={Link} to="/admins">ALl Users</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addPackage">Add Package</NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/allBooking">Manage Bookings</NavDropdown.Item>



                        </NavDropdown>

                        }

                        <span className=" text-light pt-3 px-2 fw-lighter ">{user.displayName}</span>
                        {user.email ? <Button variant="warning" onClick={logOut} className="m-1 text-white">Log Out</Button>
                            : <NavLink to="/login"><Button variant="outline-info mt-1">Log In</Button></NavLink>}




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;