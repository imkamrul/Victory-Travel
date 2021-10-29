import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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
        <div>
            <Container className="py-5">
                <Row>
                    <Col >
                        <h1 className="text-center fw-bolder fs-2 py-3">We promise, it won’t get boring.</h1>
                        <h4 className="pt-3">Destination & Packages</h4>
                        <p className="w-50">
                            Destination of the average arrows onto the weekend. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. What is the pull of the ball tomorrow?</p>
                    </Col>
                    <Row xs={1} md={3} className="g-4">

                        {
                            packages.length ? packages.map(pack => <Col>
                                <Card className="custom-package-card-style" >
                                    <Card.Img variant="top" src={pack.img} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="fs-4 fw-bolder ">{pack.event}</h4>

                                        </Card.Title>

                                        <Card.Text>
                                            <p>{pack.description.slice(0, 192)}</p>
                                            <div className="text-center">
                                                <span className="mx-3 fs-4"><i class="fas fa-dollar-sign text-warning"></i> {pack.price}</span>
                                                <span className="mx-3 fs-4">
                                                    <i className="far fa-clock pe-2 text-warning"></i>
                                                    {pack.duration} day
                                                </span>
                                                <span>      <Button variant="dark" className="my-3" onClick={() => { packageRegister(pack._id) }}>Book now</Button></span>
                                            </div>

                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </Col>) : <p>no data</p>

                        }

                    </Row>
                </Row>

            </Container>
        </div >
    );
};

export default DisplayPackages;


//    <Card.Title className="d-flex justify-content-between"> <span className="fs-4 fw-bolder">{pack.event}</span>   <span className="pt-1"><i class="fas fa-dollar-sign text-warning"></i> {pack.price} tk</span> <span
//    className="pt-1">
//    <i className="far fa-clock pe-2 text-warning"></i>
//    {pack.duration} day
// </span></Card.Title>

