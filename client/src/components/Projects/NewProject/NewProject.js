import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewProjectForm from './NewProjectForm'
import Modal from 'react-bootstrap/Modal'
import './NewProject.css'

import { createNewProject, toggleNewProject } from '../../../redux/ActionCreators'

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
})

const mapDispatchToProps = dispatch => ({
    createNewProject: values => dispatch(createNewProject(values)),
    toggleNewProject: () => dispatch(toggleNewProject())
})

class NewProject extends PureComponent {
    handleSubmit = formValues => {
        const { createNewProject, isAuthenticated, token, toggleNewProject } = this.props

        if (isAuthenticated && token) {
            createNewProject(formValues)
        }

        return toggleNewProject()
    }
    
    render() {
        const { toggleNewProject } = this.props

        return (
            <Modal show onHide={() => toggleNewProject()} className="new-project-container">
                <Modal.Header closeButton>
                    <Modal.Title>New Project</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewProjectForm onSubmit={this.handleSubmit} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject)
