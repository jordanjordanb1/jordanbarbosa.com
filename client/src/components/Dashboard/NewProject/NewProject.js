import React, { PureComponent } from 'react'
import NewProjectForm from './NewProjectForm'
import './NewProject.css'

export default class NewProject extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault()
    }
    
    render() {
        return (
            <>
                <NewProjectForm onSubmit={this.handleSubmit} />
            </>
        )
    }
}
