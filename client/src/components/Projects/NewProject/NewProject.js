import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewProjectForm from './NewProjectForm'
import Modal from 'react-bootstrap/Modal'
import './NewProject.css'

import { createNewProject, toggleNewProject, storeImage } from '../../../redux/ActionCreators'

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
})

const mapDispatchToProps = dispatch => ({
    createNewProject: values => dispatch(createNewProject(values)),
    toggleNewProject: () => dispatch(toggleNewProject()),
    storeImage: image => dispatch(storeImage(image))
})

class NewProject extends PureComponent {
    static defaultProps = {
        formData: new FormData()
    }

    handleImage = e => {
        e.preventDefault()

        const img = e.target.files[0],
              { formData } = this.props
        
        return formData.append('img', img)
    }

    handleSubmit = formValues => {
        const { createNewProject, isAuthenticated, token, toggleNewProject, formData } = this.props

        delete formValues.img
            
        const valuesToJson = JSON.stringify(formValues)

        if (isAuthenticated && token) {

            formData.append('form', valuesToJson)

            createNewProject(formData)
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
                    <NewProjectForm onSubmit={this.handleSubmit} handleImage={this.handleImage} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject)
