import React, { useState } from 'react';
import { Col, Container, Row, Button, Image, Modal, InputGroup, FormControl } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import hero from '../../img/hero.png'
import './Heroic.css'
const HeroicPart = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState(false);

    const handleClose = () => setBooking(false);
    const handleBookingShow = () => setBooking(true);
    return (
        <div >
            <Container>
                <Row >
                    <Col md={6}>
                        <Image src={hero} rounded fluid style={{ height: "450px" }} className="floating img-responsive" />

                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div >
                            <h2>
                                Get ready for real time adventure
                            </h2>
                            <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            <Button variant="dark" className="my-2" onClick={handleBookingShow}>Booking Now</Button>
                        </div>


                        <Modal
                            show={booking}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Dear {user.email && user.displayName}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                                    <FormControl
                                        placeholder="Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Day</InputGroup.Text>
                                    <FormControl
                                        placeholder="Days"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                                    <FormControl
                                        placeholder="Mobile Number"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Location Name</InputGroup.Text>
                                    <FormControl
                                        placeholder="Location Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="dark" onClick={handleClose}>Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroicPart;