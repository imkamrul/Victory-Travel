import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div id="contact">
            <div className="bg-dark text-white py-5 text-muted">
                <Container>
                    <Row>

                        <Col md={3} >
                            <h1 className="fs-3 pb-2">𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</h1>



                            <p>
                                <span className="footer-p-customize">Road:07 , Uttara, Dhaka</span> <br />
                                <span className="footer-p-customize">Reservation: +1-202-555-0145</span> <br />
                                <span className="footer-p-customize">Ticket Office: +1-202-555-0145</span> <br />

                            </p>


                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Tickets & Booking</h1>
                            <p>
                                <span className="footer-p-customize">Tickets</span> <br />
                                <span className="footer-p-customize">Season Passes</span> <br />
                                <span className="footer-p-customize">Vacation Packages</span> <br />
                            </p>
                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Support & Help</h1>
                            <p>
                                <span className="footer-p-customize">About Us</span> <br />
                                <span className="footer-p-customize">Feedbacks</span> <br />
                                <span className="footer-p-customize">Blogs</span> <br />
                            </p>


                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Follow With Us</h1>
                            <p className="fs-2">
                                <i className="fab fa-facebook pe-2"></i>
                                <i className="fab fa-instagram-square pe-2"></i>
                                <i className="fab fa-linkedin-in pe-2"></i>
                                <i className="fab fa-twitter pe-2"></i>
                                <i className="fab fa-youtube"></i> </p>


                        </Col>


                    </Row>
                </Container>
            </div>
            <p className="text-center pt-3 fs-5">Copyrights © 2021 <span className="text-info"> 𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</span>. All Rights Reserved</p>


        </div>
    );
};

export default Footer;