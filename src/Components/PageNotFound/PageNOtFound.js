import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import pic from '../../img/pageNot.png'

const PageNOtFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image className="floating" src={pic} rounded fluid style={{ height: "400px" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageNOtFound;