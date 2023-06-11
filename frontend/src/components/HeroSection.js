import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function HeroSection() {
    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Easiest way to find your dream house</h1>
                        <p>Let’s find a home that’s perfect for you</p>
                        <div className="search-form">
                            <Form className="d-flex justify-content-center">
                                <Form.Control
                                    type="search"
                                    placeholder="ZIP code or State, City, e.g Illinois, Chicago"
                                    className="me-2 "
                                    aria-label="Search"
                                    style={{ width: "50%" }}
                                />
                                <Button>Search</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;
