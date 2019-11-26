import React, { PureComponent } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, ButtonGroup, CardSubtitle } from 'reactstrap'
import { config } from '../../../config'

import './ProjectsItemComponent.css'

export default class ProjectsItemComponent extends PureComponent {
    renderTechUsed() {
        const tech = this.props.values.tech

        return tech.map((item, index) => {
            return <div className="tech-box" key={index}>{item}</div>
        })
    }

    render() {
        const values = this.props.values

        return (
            <Card className="project-card">
                <CardImg top src={`${config.url}/static/media/projects/${values.img}`} alt={values.name} />
                <CardBody>
                    <CardSubtitle className="tech-header" style={{marginBottom: "10px"}} tag="h6">Technologies used: </CardSubtitle>
                    <div className="tech-flex d-flex">
                        {this.renderTechUsed()}
                    </div>
                    <hr className="tech-header" />
                    <CardTitle className="item-header" tag="h3">{values.name}</CardTitle>
                    <CardText>{values.desc}</CardText>
                    <ButtonGroup className="project-card-btn-group">
                        <a href={values.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><i className="fas fa-code"></i>&nbsp; VIEW CODE</a>
                        <a href={values.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><i className="fas fa-rocket"></i>&nbsp; LAUNCH</a>
                    </ButtonGroup>
                </CardBody>
            </Card>
        )
    }
}
