import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/Modal'
import './Login.css'
import LoginForm from './LoginForm'
import { toggleLogin, loginUser, insertMessage, insertInput } from '../../redux/ActionCreators'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    success: state.login.success,
    errMsg: state.login.errMsg
})

const mapDispatchToProps = dispatch => ({
    toggleLogin: () => dispatch(toggleLogin()),
    loginUser: values => dispatch(loginUser(values)),
    insertMessage: message => dispatch(insertMessage(message)),
    insertInput: () => dispatch(insertInput())
})

class Login extends PureComponent {
    // Handles the submitting of the login form after validation
    onSubmit = async values => {
        const { loginUser, success, errMsg } = this.props
              
        await loginUser(values) // Sends values to dispatch
        
        if (success && !errMsg)
            return this.hideModal('Successfully logged in!');

        return false
    }
    
    // Unloads the contact component
    hideModal(msg) {
        let insertMsg = msg || 'Exiting login form...'

        return setTimeout(() => {
            this.props.toggleLogin(); 
            this.props.insertMessage(insertMsg);
            this.props.insertInput()
        }, 200)
    }

    render() {
        const { success, errMsg } = this.props

        return (
            <Modal show onHide={() => this.hideModal()} className="login-container">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { !success && errMsg ? (<div className="form-error text-center mb-2"> {errMsg} </div>) : null }

                    <LoginForm onSubmit={this.onSubmit} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
