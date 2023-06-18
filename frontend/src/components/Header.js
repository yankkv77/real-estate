import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        <Navbar expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>RealEstate</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/buy">
                            <Nav.Link>Buy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/sell">
                            <Nav.Link>Sell</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/agents">
                            <Nav.Link>Find Realtors</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/services">
                            <Nav.Link href="#services">Services</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Account" id="basic-navbar-nav">
                            <LinkContainer to="my-page">
                                <NavDropdown.Item>My Page</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="my-home">
                                <NavDropdown.Item>My Home</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <LinkContainer to="/login">
                        <Button
                            className="me-3"
                            variant="outline-success"
                            size="md"
                        >
                            Log In
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="sign-up">
                        <Button size="md">Sign Up</Button>
                    </LinkContainer>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
