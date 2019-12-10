import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CharacterCard from './CharacterCard';

class MainArea extends Component {
    constrctor() {
        super();
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <CharacterCard />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default MainArea;