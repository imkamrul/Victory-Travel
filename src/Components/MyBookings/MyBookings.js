import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Spinner, ListGroup, Modal } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const email = user.email;
    const [myBooking, setMyBooking] = useState([]);
    const [deletePackageModal, setDeletePackageModal] = useState(false);

    const closePackageModal = () => setDeletePackageModal(false);
    const showPackageModal = () => setDeletePackageModal(true);
    const deleteMyBooking = id => {
        closePackageModal()
        axios.delete(`https://intense-castle-18583.herokuapp.com/bookingDelete/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert("deleted successful");
                    const updateMyBooking = myBooking.filter(booking => booking._id !== id);
                    setMyBooking(updateMyBooking)
                }
            })
    }
    useEffect(() => {
        axios.get(`https://intense-castle-18583.herokuapp.com/myBookings?search=${email}`)
            .then(res => {

                setMyBooking(res.data)
            })

    }, [email])
    console.log(myBooking)
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h4 className="text-center">My Bookings list</h4>
                    </Col>
                    <Row className="g-4">

                        {
                            myBooking?.map(booking => <Col xs={12} md={4}
                                key={booking._id}
                            >
                                <Card className="custom-shadow-all">
                                    <Card.Img variant="top" src={booking.img} />
                                    <Card.Body>
                                        <Card.Title>{booking.event}</Card.Title>
                                        <Card.Header>Name: {booking.name}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                Mobile : {booking.mobile} <br />
                                                Address: {booking.address}
                                            </ListGroup.Item>

                                            <ListGroup.Item>Price: {booking.price} <i className="fas fa-dollar-sign text-warning"></i>  <br /> Status: {booking.status}</ListGroup.Item>
                                            <ListGroup.Item><span className=""><Button variant="dark" className="my-1" onClick={showPackageModal}>Cancel It</Button></span></ListGroup.Item>


                                        </ListGroup>


                                    </Card.Body>
                                </Card>
                                <Modal
                                    show={deletePackageModal}
                                    onHide={closePackageModal}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title className="text-warning">Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Deleting this package. Are you sure?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={closePackageModal}>
                                            Close
                                        </Button>
                                        <Button variant="danger" onClick={() => { deleteMyBooking(booking._id) }}  >Delete</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>)

                        }

                    </Row>
                </Row>
            </Container>

        </div>
    );
};

export default MyBookings;