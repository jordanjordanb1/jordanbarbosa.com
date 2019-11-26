import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import { showContact, hideContact, insertInput, insertMessage, sendEmail } from '../../redux/ActionCreators'

import './ContactFormComponent.css'

import ContactForm from './formComponent'

const mapDispatchToProps = dispatch => ({
    showContact: () => dispatch(showContact()),
    hideContact: () => dispatch(hideContact()),
    insertMessage: message => dispatch(insertMessage(message)),
    insertInput: () => dispatch(insertInput()),
    sendEmail: values => dispatch(sendEmail(values))
})

class ContactFormComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    // Sends the values to the redux actions
    async sendMail(values) {
        const input_values = JSON.stringify(values) // Puts the values into JSON format
        
        let sendMail = await this.props.sendEmail(input_values)

        return sendMail
    }

    // Handels the submit of the contact form
    onSubmit(values) {
        this.sendMail(values).then(resp => {
            this.props.hideContact() // Unloads the contact component
            this.props.insertMessage('Success! Contact message sent, I will respond to you as soon as possible.') // Adds this message into the console
            this.props.insertInput() // Inserts a fresh input
        })
    }


    // Unloads the contact component
    hideModal() {
        return setTimeout(() => {
            this.props.hideContact(); 
            this.props.insertMessage('Exiting contact form...'); 
            this.props.insertInput()
        }, 200)
    }

    render() {
        return (
            <Modal isOpen={true} toggle={() => { this.hideModal() }}>
                <ModalHeader toggle={() => this.hideModal()}>Contact Me</ModalHeader>

                <ModalBody>
                    <ContactForm onSubmit={this.onSubmit} />
                </ModalBody>
            </Modal>
        )
    }
}

export default connect(null, mapDispatchToProps)(ContactFormComponent)
