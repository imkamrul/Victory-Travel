import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {


    const rightArrow = <FontAwesomeIcon icon={faLongArrowAltRight} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instragram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div className="banner-bg">
            <Container>
                <Row className="pt-5">
                    <Col md={6} className="py-5 ">
                        <h2 className="text-white fw-bolder fs-1">Feel free to discover most engaging place</h2>
                        <h5 className="text-white pt-2 fw-lighter fs-4">Best places for your next travel are here check them out.</h5>
                        <p className="text-white fs-5 "> <span className="explore-arrow">Explore more <span className=" ps-1 "> {rightArrow}</span></span> </p>
                        <p className="social-media"> <span>{facebook}</span> <span>{instragram}</span> <span>{twitter}</span> </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;