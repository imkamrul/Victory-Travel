import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './AdventureExp.css'

const AdventureExp = () => {
    const checkbox = <FontAwesomeIcon icon={faCheckCircle} />

    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col md={6}>
                        <Row className="g-4">
                            <Col xs={6} >
                                <div className="adventure-service">
                                    <p className="text-center "><i class="fas fa-dollar-sign fs-1 ad-icon"></i></p>
                                    <h4>Best Price Guarantee</h4>
                                </div>

                            </Col>
                            <Col xs={6}>
                                <div className="adventure-service">
                                    <p className="text-center "><i class="fas fa-user-shield fs-1 ad-icon"></i></p>
                                    <h4>Safe and Secure</h4>
                                </div>

                            </Col>
                            <Col xs={6}>
                                <div className="adventure-service">
                                    <p className="text-center "><i class="fas fa-route fs-1 ad-icon"></i></p>
                                    <h4>Best Travel Agents</h4>
                                </div>

                            </Col>
                            <Col xs={6}>
                                <div className="adventure-service">
                                    <p className="text-center "><i class="fab fa-guilded fs-1 ad-icon"></i></p>
                                    <h4>Travel Guidelines</h4>
                                </div>


                            </Col>

                        </Row>
                    </Col>
                    <Col md={6}>
                        <h4 className="fw-bolder fs-4 pb-1">Get Adventure Experience</h4>
                        <p>Adventure service average visitors eu volutpat. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. What is the pull of the ball tomorrow? No one needs to be pregnant with their partners. The ugly mass but the element of time but poverty.</p>

                        <Row >
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span>  Adventure Park</p></Col>
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span> Spot Nature Vibes</p></Col>
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span> Beauty Landscape</p></Col>
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span>  Hiking Spot Adventure</p></Col>
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span>  Convinient Place</p></Col>
                            <Col xs={6} > <p className="fs-5"><span className="text-primary me-2">{checkbox}</span>  Canoeing Adventure</p></Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdventureExp;