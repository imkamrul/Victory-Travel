import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './TipsNews.css'
const TipsNews = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h3 className="text-center">Tips & News Adventure</h3>

                        <Row xs={1} md={2} className="g-4 pt-4">

                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://image.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3653.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Tips for Mountain Climbing</Card.Title>
                                        <Card.Text className="mb-1">
                                            BLOG DETAIL Blog Detail Tips for Mountain Climbing Admin September 17, 2021 Tour Massa
                                        </Card.Text>
                                        <p className=" fs-5 mb-0 news-explore"><i class="fas fa-arrow-right me-2"></i> Explore more <span className=" ps-1 "></span></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg" />
                                    <Card.Body>
                                        <Card.Title>The Best Photo Spot Rinjani</Card.Title>
                                        <Card.Text className="mb-1">
                                            BLOG DETAIL Blog Detail The Best Photo Spot Rinjani Admin September 17, 2021 Spot
                                        </Card.Text>
                                        <p className=" fs-5 news-explore mb-0"><i class="fas fa-arrow-right me-2"></i> Explore more <span className=" ps-1 "></span></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Row className="gx-1 pb-4">
                                    <Col md={6}>
                                        <Image style={{ height: "120px" }} src="https://image.freepik.com/free-photo/man-traveling-alone-montenegro_23-2149040709.jpg" rounded fluid />

                                    </Col>
                                    <Col md={6} className="ps-2">
                                        <h5 className="mb-1">Event Meet The Travel 2021</h5>
                                        <p>September 12, 2021</p>

                                    </Col>

                                </Row>
                                <Row className="gx-1 pb-4">
                                    <Col md={6}>
                                        <Image style={{ height: "120px" }} src="https://image.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1111.jpg" rounded fluid />

                                    </Col>
                                    <Col md={6} className="ps-2">
                                        <h5>The Camp for Cooking Guide</h5>
                                        <p>September 17, 2021</p>

                                    </Col>

                                </Row>
                                <Row className="gx-1">
                                    <Col md={6}>
                                        <Image style={{ height: "120px" }} src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg" rounded fluid />

                                    </Col>
                                    <Col md={6} className="ps-2">
                                        <h5>12 Best Camping The World</h5>
                                        <p>September 21, 2021</p>

                                    </Col>

                                </Row>



                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TipsNews;