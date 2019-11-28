import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Parallax from 'parallax-js'
import { isBrowser } from 'react-device-detect'
import { showContact, showProjects } from '../../redux/ActionCreators'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import './HomeComponent.css'

import Table from './Table/TableComponent'
import ViewCode from './ViewCode/ViewCodeComponent'

const mapDispatchToProps = dispatch => ({
    showContact: () => dispatch(showContact()),
    showProjects: () => dispatch(showProjects())
})

class HomeComponent extends PureComponent {
    componentDidMount() {
        if (isBrowser) { // Checks to see if browser or mobile, because parallax on mobile is bad
            this.parallax = new Parallax(this.scene) // If browser, starts the scene
        } else {
            try {
                this.parallax.disable() // If not, try to disable it if one was set
            } catch(e) {
                return null
            }
        }
    }

    componentWillUnmount() {
        this.parallax.disable() // Most likely will never run
    }

    render() {
        return(
            <>
                <div className="branding">
                    <h1>Jordan Barbosa</h1>
                    <h2>web developer</h2>
                </div>

                { isBrowser ? <ViewCode /> : null }
                <div className="scene" ref={el => this.scene = el}>
                    <div className="layer main-box" data-depth="0.25">
                        <Table />
                    </div>
                </div>

                {/* Mobile portion of website */}


                <Container fluid={true} className="mobile-container">
                    <Row>
                        <Col xs="12" className="text-center mobile-branding">
                            <h1>Jordan Barbosa</h1>
                            <h2>Web Dev</h2>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="12" className="text-center mobile-warning-box">
                            <h2 className="mobile-warning"><i className="fas fa-exclamation-triangle"></i> NOTE <i className="fas fa-exclamation-triangle"></i></h2>
                            <h3>This website is best viewed on a computer</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="text-center about-me-header" xs={{size: 8, offset: 2}}>
                            <h1>About me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center about-me" xs={{size: 10, offset:1}}>
                            <p>
                                My name is Jordan and welcome to my portfolio website. I am a javascript web developer who currently specializes in React/Redux, NodeJS, Express.js and Mongoose. 
                                But I love to tinker around with other technologies. 
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="auto" className="mx-auto">
                            <ButtonGroup className="mobile-nav">
                                <Button onClick={() => this.props.showContact()}>Contact Me</Button>
                                <Button onClick={() => this.props.showProjects()}>View Projects</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>

                    <br /><footer className="mobile-footer">
                        <Row>
                            <Col xs="auto" className="mx-auto"> 
                                <ButtonGroup className="mobile-social-buttons">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jordan-barbosa"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/jordanjordanb1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jordanjordanb/"><i className="fab fa-instagram"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="mailto:jordansbarbosa01@gmail.com"><i className="fas fa-envelope"></i></a>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </footer>
                </Container>
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(HomeComponent)
