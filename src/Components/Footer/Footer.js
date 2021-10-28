import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {

    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instragram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div>
            <Container className="pt-5 pb-3">
                <Row>
                    <Col xs={6} md={3} >
                        <h4 className="py-3">𝐕𝐢𝐜𝐭𝐨𝐫𝐲 𝐓𝐫𝐚𝐯𝐞𝐥</h4>
                        <p className="footer-p-customize mb-1"> <i class="fas fa-envelope-square me-2"></i> info@gmail.com</p>
                        <p className="footer-p-customize"><i class="fas fa-phone me-2"></i> 01234534656</p>

                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Learn more</h4>
                        <p className="mb-1 footer-p-customize">About  Victory Travel</p>
                        <p className="mb-1 footer-p-customize">Press Releases</p>
                        <p className="mb-1 footer-p-customize">Environment</p>
                        <p className="mb-1 footer-p-customize">Jobs</p>
                        <p className="mb-1 footer-p-customize">Privacy Policy</p>
                        <p className="mb-0 footer-p-customize">Contact Us</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Tickets & Booking</h4>
                        <p className="mb-1 footer-p-customize">Victory Travel</p>
                        <p className="mb-1 footer-p-customize">Tickets</p>
                        <p className="mb-1 footer-p-customize">Season Passes</p>
                        <p className="mb-0 footer-p-customize">Vacation Packages</p>
                    </Col>
                    <Col xs={6} md={3} >
                        <h4>Social</h4>
                        <p className="footer-social-media"> <span>{facebook}</span> <span>{instragram}</span> <span>{twitter}</span> </p>
                    </Col>

                </Row>
                <hr />
                <p className="text-center pt-3"><i class="fas fa-copyright"></i> 2021 Victory Travel  | All Rights Reserved</p>
            </Container>

        </div>
    );
};

export default Footer;