import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "../actions/propertyActions";
import Property from "../components/Property";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
    const dispatch = useDispatch();
    // Pulling part of a state
    const propertyList = useSelector((state) => state.propertyList);
    const { error, loading, properties } = propertyList;

    // useEffect is used to dispatch the listProperties action
    useEffect(() => {
        dispatch(listProperties());
    }, [dispatch]);

    return (
        <div>
            <HeroSection />
            <Container className="py-3">
                <h2>Popular Properties</h2>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Row>
                        {properties.map((property) => (
                            <Col
                                className="py-3"
                                key={property._id}
                                sm={12}
                                md={6}
                                lg={4}
                                xl={3}
                            >
                                <Property property={property} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default HomeScreen;
