import { faCamera, faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { Col, Container, Image, Row, Button, Modal } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import tentImg from '../../img/tent.jpg';
import './Tent.css'

const Tent = () => {
    const { user } = useAuth();
    const food = <FontAwesomeIcon icon={faUtensils} />
    const camera = <FontAwesomeIcon icon={faCamera} />
    const Coffee = <FontAwesomeIcon icon={faCoffee} />
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <Container>
                <Row className="py-5 ">
                    <Col md={12} className="text-center py-3">
                        <h1 className="text-center fw-bolder fs-2 pb-3">
                            Special Offer
                        </h1>



                    </Col>
                    <Col>
                        <Row>
                            <Col md={6}>

                                <h4 className="fw-bolder fs-4 pb-1">Classic Tent</h4>
                                <p className="fs-5"> Classic Tent | 1-6 Persons | 12m2 |</p>
                                <p>Life today is more complicated than ever before. And, for some, it feels less rewarding. We get so wrapped in things that don't matter. Every thing goes by so fast. </p>
                                <ul>
                                    <li>If you care about your Footprint, the mark you leave on this world as you live on it, then you've probably already read up on living in a tent.</li>
                                    <li>
                                        Living in a tent, for any reason, is going to be a challenge. And that challenge is a great reason for trying it.
                                    </li>
                                    <li>
                                        One of the best reasons, I think, for wanting to live in a tent is because of the cost of living decrease. It's pretty extreme
                                    </li>


                                </ul>
                                <hr />
                                <p className="tent-service"> <span>{camera} Shot Moment  </span> <span> {food} Food  </span> <span> {Coffee}  Coffee  </span>
                                </p>
                                <p > <Button variant="secondary" className="my-3" onClick={handleShow}>Check Availability</Button></p>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Dear {user.email && user.displayName}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="text-info">
                                        This offer has expired. Thanks for visiting our website.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>

                                    </Modal.Footer>
                                </Modal>
                            </Col>
                            <Col md={6} className="d-flex justify-content-center align-items-center ">
                                <Image src={tentImg} rounded fluid className="custom-shadow-all" />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tent;