import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ContactForm from './ContactForm/ContactFormComponent'

import Home from './Home/HomeComponent'
import Login from './Login/Login'

const mapStateToProps = state => ({
    isContactOpen: state.contact.isContactOpen,
    isLoginOpen: state.login.isLoginOpen
})

class MainComponent extends PureComponent {
    render() {
        const { isLoginOpen, isContactOpen } = this.props

        return (
            <>
                { isLoginOpen ? <Login /> : null}
                { isContactOpen ? <ContactForm /> : null }
                <Home />
            </>
        )
    }
}

export default connect(mapStateToProps)(MainComponent)
