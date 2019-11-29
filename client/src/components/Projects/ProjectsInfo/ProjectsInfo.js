import React, { PureComponent } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './ProjectsInfo.css'
import { config } from '../../../config'

export default class ProjectsInfo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    // Handles the 'X' and overlay click to run animations
    async handleClick() {
        await this.setState({
            isOpen: false
        })

        // Required otherwise animations won't show
        setTimeout(() => {
            this.props.hide()
        }, 500)
    }

    render() {
        const { project: { img, name, desc, github, isHeroku, url, tech } } = this.props

        return (
            <div style={ !this.state.isOpen ? { animation: "hideOverlay .3s ease-out forwards" } : null } className="project-info-overlay d-flex justify-content-center align-items-center" onClick={() => this.handleClick()}>
                <div style={ !this.state.isOpen ? { animation: "hideCard .3s ease-out forwards" } : null } className="project-card" onClick={e => e.stopPropagation()}>
                    <div onClick={() => this.handleClick()} className="project-info-exit"><i className="fas fa-times"></i></div>

                    <Image fluid src={`${config.url}/static/media/projects/${img}`} />
                    <Row className="p-3">
                        <Col xs="12">
                            <Row>
                                <Col xs="12"><h2>{name}</h2></Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <hr />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <h6>Description:</h6>
                                    <p>{desc}</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h6>Tech Used:</h6>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        { tech.map((tech, index) => {
                                            return <span className="mr-2 tech-item mb-2" key={index}>{tech}</span>
                                        }) }
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <hr />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto">
                                    { isHeroku ? <><Alert variant="warning"><i className="fas fa-info-circle"></i> Note: This is a heroku app, it may take long to load</Alert></> : null }
                                    <ButtonGroup className={ isHeroku ? 'mt-1' : null }>
                                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={github}><i className="fab fa-github mr-1"></i> Code</a>
                                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={url}><i className="fas fa-external-link-alt mr-1"></i> Visit</a>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
