import React from 'react'
import reduxForm from 'redux-form/lib/reduxForm'
import Field from 'redux-form/lib/Field'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'

const required = value => value ? undefined : 'Required'

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => ( // Renders the inputs
    <>
        <input {...input} 
        placeholder={placeholder} 
        type={type} 
        id={input.name}
        className={["form-control contact-input "] + (error && touched ? 'input-error' : '') } />
        {touched && ((error && <div className="text-danger error-box"><i className="fas fa-exclamation-triangle"></i> {error}</div>))}
    </>
)

function LoginForm({ onSubmit, handleSubmit, valid, pristine, submitting }) {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field placeholder="Username" name="username" id="username" component={renderField} type="text" validate={required} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field placeholder="Password" name="password" component={renderField} type="password" validate={required} />
            </FormGroup>

            <hr />

            <Button className="login-button" type="submit" color="primary" disabled={pristine || submitting}>Login</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)
