import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Accordion,
    ListGroupItem,
} from "react-bootstrap";

function PropertyScreen({ match }) {
    const [property, setProperty] = useState([]);

    useEffect(() => {
        async function fetchProperty() {
            const { data } = await axios.get(
                `/api/properties/${match.params.id}`
            );
            setProperty(data);
        }
        fetchProperty();
    });

    return (
        <div className="pt-3">
            <Row>
                <Col className="pt-2" md={6}>
                    <Image
                        className="property-img"
                        src={property.image}
                        alt={property.address}
                        fluid
                    />
                </Col>
                <Col className="pt-2" md={6}>
                    <h4>{property.address}</h4>
                    <h6>
                        {property.state}, {property.city}
                    </h6>
                    <p>{property.description}</p>
                </Col>
            </Row>
            <Row>
                <Col className="pt-3" md={6}>
                    <h4 className="for-sale">
                        For Sale <i className="fa-solid fa-check sale-check" />
                    </h4>
                    <h3>${property.price}</h3>
                    <Accordion defaultActiveKey={0}>
                        <Accordion.Item eventKey="0" variant="primary">
                            <Accordion.Header>House Info</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup
                                    className="house-info"
                                    variant="flush"
                                >
                                    <ListGroup.Item>
                                        <i className="fa-solid fa-house" />{" "}
                                        {property.bedrooms} bed,{" "}
                                        {property.bathrooms} bath,{" "}
                                        {property.sqm} sqm
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a
                                            target="_blank"
                                            className="address-link"
                                            href={property.address_link}
                                        >
                                            <i className="fa-solid fa-location-dot" />{" "}
                                            {property.address}
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fa-solid fa-hammer" />{" "}
                                        {property.year_build} year build
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fa-solid fa-warehouse" />{" "}
                                        {property.garage} cars
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col md={6}></Col>
            </Row>
        </div>
    );
}

export default PropertyScreen;
