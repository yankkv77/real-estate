import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="pt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>RealEstate</h5>
                        <p>
                            Our real estate platform offers a wide selection of
                            residential and commercial properties, along with an
                            intuitive search and detailed descriptions for
                            convenient property buying and selling
                        </p>
                    </Col>
                    <Col md={3}>
                        <div>
                            <a
                                href="https://goo.gl/maps/Jy2meESM4pJehZSo7"
                                target="_blank"
                                className="text-link"
                            >
                                83 Prorizna St, Kyiv, Ukraine, 02000
                            </a>
                        </div>
                        <div>
                            <a
                                href="tel:+(00)950000000"
                                target="_blank"
                                className="text-link"
                            >
                                +(380) 68 000 00 00
                            </a>
                        </div>
                        <div>
                            <a
                                href="tel:+(00)680000000"
                                target="_blank"
                                className="text-link"
                            >
                                +(380) 68 000 00 00
                            </a>
                        </div>

                        <div>
                            <a
                                href="mailto:g-shop@email.com"
                                target="_blank"
                                className="text-link"
                            >
                                realestate@email.com
                            </a>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="icons text-center p-2">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <i className="fa-brands fa-instagram-square" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fa-brands fa-facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fa-brands fa-linkedin" />
                            </a>
                            <div>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-square-youtube"></i>
                                </a>
                                <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-google-plus-square" />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-twitter-square" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Col className="text-center py-3">
                    Copyright &copy; RealEstate 2023
                </Col>
            </Container>
        </footer>
    );
}

export default Footer;
