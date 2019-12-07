import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Dashboard.css'
import NewProject from './NewProject/NewProject'

export default class Dashboard extends PureComponent {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <NewProject />
                    </Col>
                </Row>

                <hr />
            </Container>
        )
    }
}
