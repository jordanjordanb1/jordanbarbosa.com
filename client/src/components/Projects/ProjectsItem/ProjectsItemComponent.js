import React, { PureComponent } from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
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
            if (tech.length === (index + 1)) {
                return <div key={item}>{item}</div>
            }
            return <div key={item}>{item}|</div>
        })
    }


    render() {
        if (this.props.editMode) {
            const { toggleNewProject } = this.props

            return (
                <div className="project-item project-item__edit d-flex justify-content-center align-items-center" onClick={() => toggleNewProject()} >
                    <h3>Add Project</h3>
                </div>
            )
        } else {
            const { values: { img, name }, click, values } = this.props

            return (
                <div className="project-item">
                    <div className="project-item-overlay overlay-top d-flex justify-content-center align-items-center flex-column">
                        <h5>{name}</h5>
                        <div style={{ color:"hsl(0, 0%, 70%)" }} className="d-flex justify-content-center">
                            {this.renderTechUsed()}
                        </div>
                    </div>
                    <div className="project-item-overlay overlay-bottom d-flex justify-content-center align-items-center">
                        <Button onClick={() => click(values)}>Learn More</Button>
                    </div>
                    <Image src={`${config.url}/static/media/projects/${img}`} alt={name} />
                    <div className="hover-me d-flex justify-content-center align-items-center">
                        <h6>Hover/Click me!</h6>
                    </div>
                </div>
            )
        }
    }
}
