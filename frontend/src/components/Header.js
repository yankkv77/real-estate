import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="/">RealEstate</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#buy">Buy</Nav.Link>
                        <Nav.Link href="#sell">Sell</Nav.Link>
                        <Nav.Link href="#realtors">
                            Find Realtors
                        </Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <NavDropdown title="Account" id="basic-navbar-nav">
                            <NavDropdown.Item href="#page">
                                My Page
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#my-home">
                                My Home
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button
                        className="me-3"
                        variant="outline-success"
                        size="md"
                    >
                        Log In
                    </Button>
                    <Button size="md">Sign Up</Button>{" "}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
