import React from 'react'
import { reduxForm, Field } from 'redux-form'

import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const required = value => value ? undefined : 'Required'
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => ( // Renders the inputs
    <>
        <input {...input} 
        placeholder={placeholder} 
        type={type} 
        id={input.name}
        className={["form-control contact-input "] + (error && touched ? 'input-error' : '') } />
        {touched && ((error && <div className="text-danger error-box"><i class="fas fa-exclamation-triangle"></i> {error}</div>))}
    </>
)

const renderTextArea = ({ input, placeholder, meta: { touched, error } }) => ( // Renders the text area
    <>
        <textarea {...input} 
            placeholder={placeholder} 
            className={["form-control contact-input "] + (error && touched ? 'input-error' : '') } 
            rows="5" id={input.name}></textarea>
        {touched && ((error && <div className="text-danger error-box"><i class="fas fa-exclamation-triangle"></i> {error}</div>))}
    </>
)

const contactForm = ({ onSubmit, handleSubmit, reset, valid, pristine, submitting }) => {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Field placeholder="Your name" name="name" id="name" component={renderField} type="text" validate={[required]} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Field placeholder="Your email" name="email" component={renderField} type="email" validate={[required, email]} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Field placeholder="Your message" name="message" component={renderTextArea} validate={[required]} />
            </FormGroup>

            <hr />

            <ButtonGroup className="contact-buttons">
                <Button className="form-button" type="submit" value="reset" color="danger" disabled={pristine || submitting} onClick={reset}><i className="fas fa-sync-alt"></i> Reset</Button>
                <Button className="form-button" type="submit" value="submit" color="primary" disabled={!valid || pristine || submitting}><i className="fas fa-paper-plane"></i> Send</Button>
            </ButtonGroup>
        </Form>
    )
}

export default reduxForm({
    form: 'contact'
})(contactForm)
