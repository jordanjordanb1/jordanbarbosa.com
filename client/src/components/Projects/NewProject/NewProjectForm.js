import React from 'react'
import { reduxForm, Field } from 'redux-form'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const required = value => value ? undefined : 'Required'

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => ( // Renders the inputs
    <>
        <Form.Control {...input}
            placeholder={placeholder} 
            type={type} 
            id={input.name}
            className={error && touched ? 'input-error' : ''}     
        />

        {touched && ((error && <Form.Control.Feedback type="invalid" style={{ display: 'block' }}><i className="fas fa-exclamation-triangle"></i> {error}</Form.Control.Feedback>))}        
    </>
)

const renderFieldWithSub = ({ input, placeholder, type, meta: { touched, error } }) => ( // Renders the inputs
    <>
        <Form.Control {...input}
            placeholder={placeholder} 
            type={type} 
            id={input.name}
            className={error && touched ? 'input-error' : ''}     
        />

        <Form.Text className="text-muted">Seperate by commas, and no space inbetween</Form.Text>

        {touched && ((error && <Form.Control.Feedback type="invalid" style={{ display: 'block' }}><i className="fas fa-exclamation-triangle"></i> {error}</Form.Control.Feedback>))}        
    </>
)


const renderTextArea = ({ input, placeholder, meta: { touched, error } }) => ( // Renders the text area
    <>
        <Form.Control {...input} 
            placeholder={placeholder} 
            className={error && touched ? 'input-error' : ''}
            id={input.name}  
            as="textarea" />

        {touched && ((error && <Form.Control.Feedback type="invalid" style={{ display: 'block' }}><i class="fas fa-exclamation-triangle"></i> {error}</Form.Control.Feedback>))}
    </>
)

const renderFile = ({ input, type }) => ( // Renders the inputs
    <>
        <Form.Control {...input}
            type={type}
            id={input.name}
            value={undefined}
            accept=".jpg, .jpeg, .png"
        />       
    </>
)

const renderSwitch = ({ input, label }) => ( // Renders the inputs
    <>
        <Form.Check {...input}
            type="switch"
            id="custom-switch"
            label={label}
        />       
    </>
)

const contactForm = ({ onSubmit, handleSubmit, reset, valid, pristine, submitting }) => {
    return (
        <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group > 
                    <Form.Label htmlFor="name">Project Name</Form.Label>
                    <Field placeholder="Enter project name" name="name" component={renderField} type="text" validate={required} />
            </Form.Group>

            <Form.Group>
                    <Form.Label htmlFor="tech">Tech Used</Form.Label>
                    <Field type="text" placeholder="Enter technologies used" name="tech" component={renderFieldWithSub} validate={required} />
            </Form.Group>

            <Form.Group>
                    <Form.Label htmlFor="github">Github URL</Form.Label>
                    <Field type="url" placeholder="Enter github url" name="github" component={renderField} validate={required} /> 
            </Form.Group>

            <Form.Group>
                    <Form.Label htmlFor="url">Project URL</Form.Label>
                    <Field type="url" placeholder="Enter working project url" name="url" component={renderField} />
            </Form.Group>

            <Form.Group>
                    <Form.Label htmlFor="img">Upload Project Image</Form.Label>
                    <Field type="file" name="img" component={renderFile} validate={required} />
            </Form.Group>

            <Form.Group>
                    <Field label="Is this a Heroku app?" name="isHeroku" component={renderSwitch} />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="desc">Project Description</Form.Label>
                <Field as="textarea" name="desc" component={renderTextArea} />
            </Form.Group><br />

            <Form.Group>
                <ButtonGroup>
                    <Button type="submit" value="reset" color="danger" disabled={pristine || submitting} onClick={reset}><i className="fas fa-sync-alt"></i> Reset</Button>
                    <Button type="submit" value="submit" color="primary" disabled={!valid || pristine || submitting}> Submit</Button>
                </ButtonGroup>
            </Form.Group>
        </Form>
    )
}

export default reduxForm({
    form: 'newProject',
    multipartForm: true
})(contactForm)
