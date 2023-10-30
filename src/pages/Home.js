import React, { Component } from "react";
import Library from "../components/ProgramTugas";
import Container from "react-bootstrap/Container";

class Home extends Component {
    render() {
        return (
            <Container>
                <Library/>
            </Container>
        );
    }
}

export default Home;
