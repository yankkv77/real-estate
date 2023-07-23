import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { listAgents } from "../actions/agentActions";
import Agent from "../components/Agent";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

function AgentsScreen() {
    const dispatch = useDispatch();
    const agentList = useSelector((state) => state.agentList);
    const { error, loading, agents } = agentList;

    useEffect(() => {
        dispatch(listAgents());
    }, [dispatch]);

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
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
            )}
        </Container>
    );
}

export default AgentsScreen;
