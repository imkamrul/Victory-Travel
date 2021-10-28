import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import hero from '../../img/hero.png'
import './Heroic.css'
const HeroicPart = () => {
    return (
        <div className="bg-white">
            <Container>
                <Row className="pb-5">
                    <Col md={6}>
                        <Image src={hero} rounded fluid style={{ height: "450px" }} className="floating" />

                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div className="">
                            <h2>
                                Get ready for real time adventure
                            </h2>
                            <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            <Button variant="dark" className="my-2">Booking Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroicPart;