import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/Modal'
import './Login.css'
import LoginForm from './LoginForm'
import { toggleLogin, loginUser, insertMessage, insertInput } from '../../redux/ActionCreators'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
    toggleLogin: () => dispatch(toggleLogin()),
    loginUser: () => dispatch(loginUser()),
    insertMessage: message => dispatch(insertMessage(message)),
    insertInput: () => dispatch(insertInput()),
})

class Login extends PureComponent {
    // Handles the submitting of the login form after validation
    onSubmit = async ({ username, password }) => {
        const { loginUser } = this.props

        await loginUser({ username, password })
    }
    
    // Unloads the contact component
    hideModal() {
        return setTimeout(() => {
            this.props.toggleLogin(); 
            this.props.insertMessage('Exiting login form...'); 
            this.props.insertInput()
        }, 200)
    }

    render() {
        return (
            <Modal show onHide={() => this.hideModal()} className="login-container">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <LoginForm onSubmit={this.onSubmit} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login)
