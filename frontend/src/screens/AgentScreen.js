import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AgentScreen({ match }) {
    const [agent, setAgent] = useState([]);

    useEffect(() => {
        async function fetchAgent() {
            const { data } = await axios.get(`/api/agents/${match.params.id}`);
            setAgent(data);
        }
        fetchAgent();
    });

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
                    <h5>Offers listeds by {agent.name}:</h5>
                </Col>
            </Row>
        </div>
    );
}

export default AgentScreen;
