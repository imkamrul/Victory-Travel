import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="#home">𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;