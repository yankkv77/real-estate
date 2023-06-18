import React, { useState, useEffect } from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import Agent from "../components/Agent";
import axios from "axios";

function AgentsScreen() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        async function fetchAgents() {
            const { data } = await axios.get("api/agents");
            setAgents(data);
        }
        fetchAgents();
    }, []);

    return (
        <Row>
            {agents.map((agent) => (
                <Col
                    className="py-3"
                    key={agent._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                >
                    <Agent agent={agent} />
                </Col>
            ))}
        </Row>
    );
}

export default AgentsScreen;
