import { faCamera, faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import tentImg from '../../img/tent.jpg';
import './Tent.css'

const Tent = () => {
    const food = <FontAwesomeIcon icon={faUtensils} />
    const camera = <FontAwesomeIcon icon={faCamera} />
    const Coffee = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div >
            <Container>
                <Row className="py-5 ">
                    <Col md={12} className="text-center py-3">

                        <h3 style={{ color: "#777575", fontWeight: "700", fontSize: "30px" }}>Special Offer</h3>

                    </Col>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <h4 className="fw-bolder fs-4 pb-1">Classic Tent</h4>
                                <p className="fs-5"> Classic Tent | 1-6 Persons | 12m2 |</p>
                                <p>The classic tent is not only a lot easier but also great. Tortor consequat id porta nibh venenatis cras sed felis eget. Elite needs to get pregnant with his friends and family. Aenean et tortor at risus. But climbers in this.</p>
                                <ul>
                                    <li>It is that the bears need or the ugly, now that the price of the food needs to be taken.</li>
                                    <li>
                                        Not only is it fun, it's also great and easy. Tortor photography that's a poison to the door.
                                    </li>
                                    <li>
                                        Aenean et tortor at risus. But climbers in this. For the author at the microphone.
                                    </li>


                                </ul>
                                <hr />
                                <p className="tent-service"> <span>{camera} Shot Moment  </span> <span> {food} Food  </span> <span> {Coffee}  Coffee  </span>
                                </p>
                                <p > <Button variant="secondary" className="my-3">Check Availability</Button></p>
                            </Col>
                            <Col md={6} className="d-flex">
                                <Image src={tentImg} rounded fluid />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tent;