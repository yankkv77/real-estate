import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Accordion,
    Carousel,
    ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function PropertyScreen({ match, history }) {
    const [property, setProperty] = useState([]);
    const [propertyImages, setPropertyImages] = useState([]);
    const [agent, setAgent] = useState({});

    useEffect(() => {
        async function fetchProperty() {
            const { data } = await axios.get(
                `/api/properties/${match.params.id}`
            );
            setProperty(data);
            const { data: images } = await axios.get(
                `/api/properties/${match.params.id}/images/`
            );
            setPropertyImages(images);
            const { data: agentData } = await axios.get(
                `/api/agents/${data.realtor}`
            );
            setAgent(agentData);
        }
        fetchProperty();
    }, [match.params.id]);

    const addToFavHandler = () => {
        history.push(`/saved/${match.params.id}`)
    };

    return (
        <div className="pt-3">
            <Row>
                <Col className="pt-2" md={6}>
                    {/* Check if we got any property images available*/}
                    {propertyImages.length > 0 && (
                        <Carousel interval={null}>
                            {/* If we got images, we iterate it and create new CarouselItem for each image */}
                            {propertyImages.map((image) => (
                                <Carousel.Item key={image.id}>
                                    <Image
                                        className="property-img"
                                        src={image.image}
                                        alt={property.address}
                                        fluid
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                </Col>
                <Col className="pt-2" md={6}>
                    <h4>{property.address}</h4>
                    <h6>
                        {property.state}, {property.city}
                    </h6>
                    <p className="prop-description">{property.description}</p>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col md={6}>
                    <Row>
                        <Col md={10} xs={10}>
                            <h4 className="for-sale">
                                For Sale{" "}
                                <i className="fa-solid fa-check sale-check" />
                            </h4>
                        </Col>
                        <Col md={2} xs={2}>
                            <i
                                onClick={addToFavHandler}
                                className="fa-regular fa-heart add-to-fav"
                                type="button"
                            />
                        </Col>
                    </Row>

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
                                        {property.garage} Cars garage
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col md={6}>
                    <h5>
                        Offer by{" "}
                        <Link to={`/agent/${agent._id}`}>{agent.name}</Link>{" "}
                    </h5>
                </Col>
            </Row>
        </div>
    );
}

export default PropertyScreen;
