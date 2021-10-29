import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './ManageAllBooking.css'

const ManageAllBooking = () => {
    const [allBookings, setAllbooking] = useState([]);



    const handleStatusUpdate = id => {
        console.log(id)
        axios.put(`https://intense-castle-18583.herokuapp.com/bookingStatusUpdate/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert("process update successful");
                    for (const book of allBookings) {
                        if (book._id === id) {
                            book.status = "Approve"
                            // console.log(book)

                        }
                    }

                }
            })
    }
    const deleteBooking = id => {
        // console.log(id)
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`https://intense-castle-18583.herokuapp.com/bookingDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updateBooking = allBookings.filter(booking => booking._id !== id);
                        setAllbooking(updateBooking)
                    }
                })
        }

    }
    useEffect(() => {
        axios.get('https://intense-castle-18583.herokuapp.com/allBooking')
            .then(res => {

                setAllbooking(res.data)
            })
    }, [])
    return (
        <div>
            <Container className="py-5">
                <Row className="heading">
                    <Col md={2} xs={4}><h3 className="mb-0">Name</h3></Col>
                    <Col md={2} xs={4}><h3 className="mb-0">Email</h3></Col>
                    <Col md={4} xs={4}><h3 className="mb-0">Location</h3></Col>
                    <Col md={2} xs={8}><h3 className="mb-0">Status</h3></Col>
                    <Col md={2} xs={4}><h3 className="mb-0 text-center">Delete</h3></Col>

                </Row>
                {
                    allBookings?.map(booking => <Row
                        key={booking._id}
                        className="user-booking-detail">
                        <Col md={1} xs={4}><h4 className="mb-0">{booking.name}</h4></Col>
                        <Col md={3} xs={4}><h4 className="mb-0 ms-3">{booking.email}</h4></Col>
                        <Col md={3} xs={4}><h4 className="mb-0">{booking.event}</h4></Col>
                        <Col md={3} xs={8}><h4 className="mb-0">{booking.status} <Button variant="secondary" onClick={() => handleStatusUpdate(booking._id)}>Update</Button></h4></Col>
                        <Col md={2} xs={4}><h4 className="mb-0 text-center"><i className="fas fa-trash text-danger " onClick={() => { deleteBooking(booking._id) }} ></i></h4></Col>

                    </Row>)

                }
            </Container>
        </div>
    );
};

export default ManageAllBooking;