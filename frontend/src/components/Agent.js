import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Agent({ agent }) {
    return (
        <Link to={`/agent/${agent._id}`} className="card-link">
            <Card>
                <Card.Img variant="top" src={agent.profile_photo} />
                <Card.Body className="text-center">{agent.name}</Card.Body>
            </Card>
        </Link>
    );
}

export default Agent;
