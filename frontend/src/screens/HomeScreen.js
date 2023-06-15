import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Property from "../components/Property";
import HeroSection from "../components/HeroSection";
import axios from "axios";

function HomeScreen() {
    // #1 set state - properties, setProperties - method
    const [properties, setProperties] = useState([]);

    // #2 useEffect gets triggered every time, when the component loads or when a state gets updated
    useEffect(() => {
        async function fetchProperties() {
            const { data } = await axios.get("/api/properties");
            setProperties(data);
        }
        fetchProperties();
    }, []);

    return (
        <div>
            <HeroSection />
            <Container className="py-3">
                <h2>Popular Properties</h2>
                <Row>
                    {properties.map((property) => (
                        <Col
                            className="py-3"
                            key={property._id}
                            sm={1}
                            md={6}
                            lg={5}
                            xl={3}
                        >
                            <Property property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HomeScreen;
