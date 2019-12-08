import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewProjectForm from './NewProjectForm'
import './NewProject.css'

import { createNewProject } from '../../../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    createNewProject: values => dispatch(createNewProject(values))
})

class NewProject extends PureComponent {
    handleSubmit = formValues => {
        const { createNewProject } = this.props

        createNewProject(formValues)
    }
    
    render() {
        return (
            <>
                <NewProjectForm onSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(NewProject)
