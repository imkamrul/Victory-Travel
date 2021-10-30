import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Spinner, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './DisplayPackages.css'

const DisplayPackages = () => {
    const [packages, setPackages] = useState({});
    const history = useHistory();
    const packageRegister = (id) => {

        history.push(`/booking/${id}`);
    }
    useEffect(() => {
        axios.get('https://intense-castle-18583.herokuapp.com/packages')
            .then(res => {

                setPackages(res.data)
            })
    }, [])

    return (
        <div id="packages">
            <Container className="py-5">
                < Row >
                    <Col >
                        <h1 className="text-center fw-bolder fs-2 pt-3">
                            Destination & Packages
                        </h1>
                        <p className="text-center">  We promise, it won’t get boring.</p>
                    </Col>
                    <Row xs={1} md={3} className="g-4">

                        {
                            packages.length ? packages.map(pack => <Col
                                key={pack._id}>
                                <Card className="custom-package-card-style" >
                                    <Card.Img variant="top" src={pack.img} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="fs-4 fw-bolder ">{pack.event}</h4>

                                        </Card.Title>

                                        <Card.Text>
                                            {pack.description.slice(0, 192)}


                                        </Card.Text>
                                        <ListGroup variant="flush" className="mb-0">
                                            <ListGroup.Item className="text-center mb-0">
                                                <span className=" fs-4 me-3"><i className="fas fa-dollar-sign text-warning me-2"></i> {pack.price}</span>
                                                <span className="fs-4">
                                                    <i className="far fa-clock me-2 text-warning"></i>
                                                    {pack.duration} day
                                                </span> <br />
                                                <Button variant="dark" className="my-1" onClick={() => { packageRegister(pack._id) }}>Book now</Button></ListGroup.Item>


                                        </ListGroup>


                                    </Card.Body>
                                </Card>
                            </Col>) :
                                <div className="text-center">
                                    <Spinner animation="border" variant="dark" />
                                </div>

                        }

                    </Row>
                </Row >

            </Container >
        </div >
    );
};

export default DisplayPackages;


