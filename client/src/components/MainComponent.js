import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ContactForm from './ContactForm/ContactFormComponent'

import Home from './Home/HomeComponent'
import Projects from './Projects/ProjectsComponent'

const mapStateToProps = state => ({
    isContactOpen: state.contact.isContactOpen,
    isProjectsOpen: state.projects.isProjectsOpen
})

class MainComponent extends PureComponent {
    render() {
        return (
            <>
                { this.props.isProjectsOpen ? <Projects /> : null}
                { this.props.isContactOpen ? <ContactForm /> : null }
                    <Home isContactOpen={this.props.isContactOpen} />
            </>
        )
    }
}

export default connect(mapStateToProps)(MainComponent)
