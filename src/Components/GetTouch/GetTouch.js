import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const GetTouch = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h3 className="text-center">

                            Getting in touch is simpler than ever
                        </h3>
                        <p className="text-center">Leave us your email address and we contact you back
                        </p>
                        <div className="d-flex justify-content-center py-3">
                            <Col md={6}>
                                <InputGroup className="mb-3 " size="lg" >
                                    <FormControl
                                        placeholder="Enter you email Address"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="dark">Subscribe</Button>
                                </InputGroup></Col>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default GetTouch;