import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                        <Nav.Link as={Link} className="fs-4" to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/myBookings">My Bookings</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/allBooking">Manage Bookings</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/admins">Admins</Nav.Link> */}
                        {/* <span className=" text-light pt-3 px-2 fw-lighter ">{user.displayName}</span> */}
                        {user.email ? <NavDropdown title={user.displayName} id="basic-nav-dropdown" className=" fs-4">
                            <NavDropdown.Item as={Link} to="/admins">Admins</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addPackage">Add Package</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/myBookings">My Bookings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allBooking">Manage Bookings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <div className="text-center">
                                <Button variant="warning" onClick={logOut} className="m-1 text-white">Log Out</Button>
                            </div>

                        </NavDropdown>
                            : <NavLink to="/login"><Button variant="outline-info" className="mt-2 ms-3 px-3">Log In</Button></NavLink>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;