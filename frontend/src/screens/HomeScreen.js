import React from "react";
import { Row, Col } from "react-bootstrap";
import properties from "../properties";
import Property from "../components/Property";

function HomeScreen() {
    return (
        <div className="py-3">
            <h2>Popular Properties</h2>
            <Row>
                {properties.map((property) => (
                    <Col className="py-3" key={property._id} sm={1} md={6} lg={5} xl={3}>
                        <Property  property={property} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeScreen;
