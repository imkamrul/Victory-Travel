import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const MyBookings = () => {
    const email = "k17h02@gmail.com"
    const [myBooking, setMyBooking] = useState([]);
    const deleteMyBooking = id => {

        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`https://intense-castle-18583.herokuapp.com/bookingDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updateMyBooking = myBooking.filter(booking => booking._id !== id);
                        setMyBooking(updateMyBooking)
                    }
                })
        }
    }
    useEffect(() => {
        axios.get(`https://intense-castle-18583.herokuapp.com/myBookings?search=${email}`)
            .then(res => {

                setMyBooking(res.data)
            })

    }, [])
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h4 className="text-center">My Bookings list</h4>
                    </Col>
                    <Row xs={1} md={4} className="g-4">

                        {
                            myBooking?.map(booking => <Col
                                key={booking._id}
                            >
                                <Card className="">
                                    <Card.Img variant="top" src={booking.img} />
                                    <Card.Body>
                                        <Card.Title>{booking.event}</Card.Title>
                                        <Card.Text>
                                            <p>Booking Status: {booking.status}</p>
                                        </Card.Text>
                                        <div className="text-center">
                                            <span className="mx-3 fs-4"><i class="fas fa-dollar-sign text-warning"></i> {booking.price}</span>

                                            <span>      <Button variant="dark" className="my-3" onClick={() => { deleteMyBooking(booking._id) }}>Cancel It</Button></span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }

                    </Row>
                </Row>
            </Container>

        </div>
    );
};

export default MyBookings;