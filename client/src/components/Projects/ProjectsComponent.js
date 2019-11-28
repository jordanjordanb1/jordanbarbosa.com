import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ExitButton from './ExitButton/ExitButtonComponent'
import './ProjectsComponent.css'
import ProjectsItem from './ProjectsItem/ProjectsItemComponent'

const mapStateToProps = state => ({
    projects: state.projects.projects
})

class ProjectsComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isShown: true
        }

        this.toggleProjects = this.toggleProjects.bind(this)
    }

    toggleProjects() {
        return this.setState({
            isShown: false
        })
    }

    render() {
        return (
            <>
                <div className={!this.state.isShown ? 'projects-container closing-projects' : 'opening-projects projects-container'}>
                    <ExitButton toggleProjects={this.toggleProjects} />
                    <Container fluid={true}>
                        <Row>
                            <Col className="text-center mt-3" xs="12" >
                                <h1>My Projects</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md={{ span: 8, offset: 2 }}>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex flex-row justify-content-center" style={{flexWrap: "wrap"}} xs="12">
                                { this.props.projects.map((item, index) => {
                                    return <ProjectsItem key={index} values={item} />
                                }) }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(ProjectsComponent)
