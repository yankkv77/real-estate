import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Property from "../components/Property";
function AgentScreen({ match }) {
    const [agent, setAgent] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchAgent() {
            const { data } = await axios.get(`/api/agents/${match.params.id}`);
            setAgent(data);

            const { data: propertiesData } = await axios.get(
                `/api/properties/?realtor=${match.params.id}`
            );
            setProperties(propertiesData);
        }
        fetchAgent();
    }, [match.params.id]);

    return (
        <div className="pt-3">
            <Row>
                <Col className="pt-2" md={4}>
                    <Image
                        className="profile-img text-center"
                        src={agent.profile_photo}
                        fluid
                    />
                    <h3 className="text-center">{agent.name}</h3>
                    <div className="text-center">
                        <a className="profile-icon" href={agent.linkedin_link}>
                            <i className="fa-brands fa-linkedin" />
                        </a>
                        <a className="profile-icon" href={agent.facebook_link}>
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a className="profile-icon" href={agent.twitter_link}>
                            <i className="fa-brands fa-twitter" />
                        </a>
                    </div>
                </Col>
                <Col md={8}>
                    <p className="bio-text">{agent.bio}</p>
                    <hr />
                    <h5>Offers listed by {agent.name}:</h5>
                    <Row>
                        {properties.map((property) => (
                            <Col
                                className="py-3"
                                key={property._id}
                                sm={12}
                                md={6}
                                lg={6}
                                xl={4}
                            >
                                <Property property={property} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default AgentScreen;
