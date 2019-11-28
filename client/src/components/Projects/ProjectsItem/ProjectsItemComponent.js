import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import { config } from '../../../config'

import './ProjectsItemComponent.css'

export default class ProjectsItemComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isCollapseOpen: false
        }

        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse() {
        this.setState({
            isCollapseOpen: !this.state.isCollapseOpen
        })
    }

    renderTechUsed() {
        const { tech } = this.props.values

        return tech.map((item, index) => {
            return <div className="tech-box" key={index}>{item}</div>
        })
    }

    render() {
        const { values } = this.props

        return (
            <Card className="project-card">
                <Card.Img top src={`${config.url}/static/media/projects/${values.img}`} alt={values.name} />
                <Card.Body>
                    { values.isHeroku ?     
                        <>
                            <Card.Subtitle className="heroku-note" onClick={this.toggleCollapse}>
                                <i className="fas fa-info-circle"></i> Note: <span className="heroku">Heroku App <i className={this.state.isCollapseOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i></span>
                            </Card.Subtitle> 
                            <Collapse in={this.state.isCollapseOpen}>
                                <div className="heroku-msg"><Alert variant="warning">This is a heroku app, it may take a while to load</Alert></div>
                            </Collapse>
                        </>
                    : null }
                    <Card.Subtitle className="tech-header" style={{marginBottom: "10px"}} tag="h6">Technologies used: </Card.Subtitle>
                    <div className="tech-flex d-flex">
                        {this.renderTechUsed()}
                    </div>
                    <hr className="tech-header" />
                    <Card.Title className="item-header" tag="h3">{values.name}</Card.Title>
                    <Card.Text>{values.desc}</Card.Text>
                    <ButtonGroup className="project-card-btn-group">
                        <a href={values.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><i className="fas fa-code"></i>&nbsp; VIEW CODE</a>
                        <a href={values.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><i className="fas fa-rocket"></i>&nbsp; LAUNCH</a>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    }
}
