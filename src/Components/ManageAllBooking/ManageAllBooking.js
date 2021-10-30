import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './ManageAllBooking.css'
import { useForm } from "react-hook-form";

const ManageAllBooking = () => {
    const { user } = useAuth();
    const [allBookings, setAllbooking] = useState([]);
    const [bookingUpdate, setBookingUpdate] = useState([]);
    const [uptadeModal, setUptadeModal] = useState(false);

    const closeUpdateModal = () => setUptadeModal(false);
    const showUpdateModal = () => setUptadeModal(true);
    const handleUpate = (data) => {
        console.log(data)
        setBookingUpdate(data)

        showUpdateModal();
    }
    const { register, handleSubmit, } = useForm();
    const handleStatusUpdate = data => {

        const id = bookingUpdate._id;

        axios.put(`https://intense-castle-18583.herokuapp.com/bookingStatusUpdate/${id}`, data)
            // axios.put(`http://localhost:5000/bookingStatusUpdate/${id}`, data)
            .then(res => {
                console.log(res)
                if (res.data.modifiedCount) {
                    closeUpdateModal()
                    axios.get('https://intense-castle-18583.herokuapp.com/allBooking')
                        .then(res => {

                            setAllbooking(res.data)
                            alert("Status  updated successful");
                        })
                }

            })
    };

    const deleteBooking = id => {

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
                <h1 className="text-center py-2"> All booking list</h1>
                <Row xs={1} md={3} className="g-4">
                    {allBookings?.map(booking => <Col
                        key={booking._id}>
                        <Card>
                            <Card.Img variant="top" src={booking.img} />
                            <Card.Body>
                                <Card.Title>{booking.event}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Name :{booking.name}</ListGroup.Item>
                                    <ListGroup.Item>Email :{booking.email}</ListGroup.Item>
                                    <ListGroup.Item>Price :{booking.price} $</ListGroup.Item>
                                    <ListGroup.Item>Mobile :{booking.mobile} </ListGroup.Item>
                                    <ListGroup.Item>Address :{booking.address} </ListGroup.Item>
                                    <ListGroup.Item>Status :{booking.status}  <Button variant="outline-dark" className=" ms-3" onClick={() => handleUpate(booking)}>Update</Button></ListGroup.Item>
                                    <ListGroup.Item>  <h4 className="mb-0 mt-2 text-center "> <span className="delete-text-customize" onClick={() => { deleteBooking(booking._id) }}>Delete this booking <i className="fas fa-trash text-danger "  ></i></span></h4> </ListGroup.Item>

                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>)

                    }
                    <Modal show={uptadeModal} onHide={closeUpdateModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Hello {user.displayName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit(handleStatusUpdate)}>
                                <h2 className="fs-3 pb-3">Event : {bookingUpdate.event}</h2>
                                <label className="me-3 fs-5 pb-3">Status : </label>



                                <select {...register("Status")} className="p-1 fs-5">
                                    <option value="pending">Pending</option>
                                    <option value="processing">processing</option>
                                    <option value="approve">Approve</option>
                                </select>

                                <Button variant="primary" type="submit" style={{ padding: "5px", marginLeft: "20px" }}>
                                    Save Changes
                                </Button>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeUpdateModal}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>

        </div>
    );
};

export default ManageAllBooking;