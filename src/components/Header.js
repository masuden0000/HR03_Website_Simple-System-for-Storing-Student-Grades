import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/ProgramTugas.css';


class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to={"/"} className="fw-bold navbar-logo">KSM Android</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/" className="me-auto d-flex justify-content-end w-100">
                            <Nav.Item>
                                <Nav.Link as={NavLink} to={"/"} className="px-3 navbar-menu">programTugas.js</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to={"/perkenalandiri"} className="px-3 navbar-menu">Perkenalan Diri</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
