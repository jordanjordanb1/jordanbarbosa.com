import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ExitButton from './ExitButton/ExitButtonComponent'
import './ProjectsComponent.css'
import ProjectsItem from './ProjectsItem/ProjectsItemComponent'
import ProjectsInfo from './ProjectsInfo/ProjectsInfo'

const mapStateToProps = state => ({
    projects: state.projects.projects
})

class ProjectsComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isShown: true,
            isProjectsInfoShown: false,
            clickedProject: null
        }

        this.toggleProjects = this.toggleProjects.bind(this)
        this.openProjectsInfo = this.openProjectsInfo.bind(this)
        this.hideProjectInfo = this.hideProjectInfo.bind(this)
    }


    //  Turns the isSHhown in state to false so animations run
    toggleProjects() {
        return this.setState({
            isShown: false
        })
    }

    // Opens the info card and sends valid project to component
    openProjectsInfo(project) {
        this.setState({
            isProjectsInfoShown: true,
            clickedProject: project
        })
    }

    // Hides the info card and empties the clickedProject
    hideProjectInfo() {
        this.setState({
            isProjectsInfoShown: false,
            clickedProject: null
        })
    }

    render() {
        return (
            <>
                <div className={!this.state.isShown ? 'projects-container closing-projects' : 'opening-projects projects-container'}>
                    { this.state.isProjectsInfoShown ? <ProjectsInfo project={this.state.clickedProject} hide={this.hideProjectInfo} /> : null }
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
                                    return <ProjectsItem key={index} values={item} click={this.openProjectsInfo} />
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
