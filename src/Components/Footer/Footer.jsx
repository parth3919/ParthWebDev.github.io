import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

function Footer() {
    return (
        <div id='Footer'>
            <footer className="bg-custom-color text-white py-3 myfooter">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} lg={4} className="mb-3 mb-md-0">
                            <p className="mb-0" style={{ color: "#ffffff", fontSize: "0.8rem" }}>
                                Prath WebDev <br />
                                Supertech Upcountry, Greater Noida <br />
                                Noida,203201, INDIA
                            </p>
                        </Col>

                        <Col md={6} lg={4} className="text-md-center">
                            <p style={{ color: "#ffffff" }} >&copy; Copyright {new Date().getFullYear()} Parth WebDev All Rights Reserved</p>
                        </Col>

                        <Col md={12} lg={4} className="d-flex justify-content-md-end align-items-center">
                            <p className="mb-0 mr-3" style={{ color: "#ffffff" }}>Follow Me:</p>
                            <ul className="wrapper d-flex mb-0">
                                <li className="icon twitter mr-2">
                                    <a href="https://twitter.com/parth7858024" target="_blank" rel="noopener noreferrer">
                                        <span className="tooltip">Twitter</span>
                                        <span><FontAwesomeIcon icon={faTwitter} style={{ color: "#92140c" }} /></span>
                                    </a>
                                </li>
                                <li className="icon instagram mr-2">
                                    <a href="https://www.instagram.com/parth_._.sharma/" target="_blank" rel="noopener noreferrer">
                                        <span className="tooltip">Instagram</span>
                                        <span><FontAwesomeIcon icon={faInstagram} style={{ color: "#92140c" }} /></span>
                                    </a>
                                </li>
                                <li className="icon github mr-2">
                                    <a href="https://github.com/parth3919" target="_blank" rel="noopener noreferrer">
                                        <span className="tooltip">Github</span>
                                        <span><FontAwesomeIcon icon={faGithub} style={{ color: "#92140c" }} /></span>
                                    </a>
                                </li>
                                <li className="icon youtube">
                                    <a href="https://www.youtube.com/channel/UCyz25-D6Wmd9G2T-BZ6N-fQ" target="_blank" rel="noopener noreferrer">
                                        <span className="tooltip">Youtube</span>
                                        <span><FontAwesomeIcon icon={faYoutube} style={{ color: "#92140c" }} /></span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
