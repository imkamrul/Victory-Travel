import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Admins = () => {
    const [allAdmins, setAlladmins] = useState([]);

    useEffect(() => {
        axios.get('https://intense-castle-18583.herokuapp.com/allUsers')
            .then(res => {

                setAlladmins(res.data)
            })
    }, [])

    const deleteAdmin = (id) => {


        const deleteSure = window.confirm("are you sure ")
        if (deleteSure) {
            axios.delete(`https://intense-castle-18583.herokuapp.com/deleteUser/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updateAdminList = allAdmins.filter(booking => booking._id !== id);
                        setAlladmins(updateAdminList)
                    }
                })
        }
    }
    return (
        <div>
            <Container className="py-5">
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <h2 className="text-center">Admins List</h2>
                        <Row className="heading mt-4">
                            <Col md={4} xs={4}><h3 className="mb-0">Name</h3></Col>
                            <Col md={5} xs={4}><h3 className="mb-0">Email</h3></Col>
                            <Col md={3} xs={4}><h3 className="mb-0 text-center">Delete</h3></Col>

                        </Row>
                        {
                            allAdmins?.map(admin => <Row
                                key={admin._id}
                                className="user-booking-detail">
                                <Col md={4} xs={4}><h4 className="mb-0">{admin.name}</h4></Col>
                                <Col md={5} xs={4}><h4 className="mb-0 ms-3">{admin.email}</h4></Col>


                                <Col md={3} xs={4}><h4 className="mb-0 text-center"><i className="fas fa-trash text-danger " onClick={() => { deleteAdmin(admin._id) }} ></i></h4></Col>

                            </Row>)

                        }
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Admins;