import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './AddPackage.css'

const AddPackage = () => {
    const { user } = useAuth();
    const [EventModalsShow, setEventModalsShow] = useState(false);
    let history = useHistory();

    const closePackageAddModal = () => setEventModalsShow(false);
    const ShowPackageAddModal = () => setEventModalsShow(true);
    const { register, handleSubmit, reset } = useForm();
    const handleGotoHome = () => {
        history.push('/home')
    }
    const onSubmit = data => {

        axios.post('https://intense-castle-18583.herokuapp.com/packageADD', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert("Package added successfully");
                    ShowPackageAddModal()
                    // history.push('/home')
                    // reset();
                }

            })


    };
    return (
        <div>
            <Container className="py-5">
                <h4 className="text-center">Add A Event</h4>
                <Row className="d-flex justify-content-center">
                    <Col md={5} className="">
                        <Row className="bg-white">
                            <Col className="package-add-from">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder="Events Name" type="text" {...register("event", { required: true })} />
                                    <input placeholder="Price" type="number"  {...register("price", { required: true })} />
                                    <input placeholder="IMG Url Only" type="text" {...register("img", { required: true })} />
                                    <input placeholder="Days" type="number" {...register("duration", { required: true })} />
                                    <textarea placeholder="Description" type="text" {...register("description", { required: true })} />
                                    <input className="btn btn-primary" type="submit" value="Add Package" />
                                </form>

                            </Col>
                            <Modal
                                show={EventModalsShow}
                                onHide={closePackageAddModal}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{user.displayName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Package added successfully.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closePackageAddModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleGotoHome}>Go to home </Button>

                                </Modal.Footer>
                            </Modal>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AddPackage;