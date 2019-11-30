import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ContactForm from './ContactForm/ContactFormComponent'

import Home from './Home/HomeComponent'
import Projects from './Projects/ProjectsComponent'
import Login from './Login/Login'

const mapStateToProps = state => ({
    isContactOpen: state.contact.isContactOpen,
    isProjectsOpen: state.projects.isProjectsOpen,
    isLoginOpen: state.login.isLoginOpen
})

class MainComponent extends PureComponent {
    render() {
        return (
            <>
                { this.props.isLoginOpen ? <Login /> : null}
                { this.props.isProjectsOpen ? <Projects /> : null}
                { this.props.isContactOpen ? <ContactForm /> : null }
                <Home isContactOpen={this.props.isContactOpen} />
            </>
        )
    }
}

export default connect(mapStateToProps)(MainComponent)
