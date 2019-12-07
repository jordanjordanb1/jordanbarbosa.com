import React, { PureComponent } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import './NewProject.css'
import Button from 'react-bootstrap/Button'

export default class NewProject extends PureComponent {
    render() {
        return (
            <Form>
                <h1 className="text-center">New project</h1>

                <br />

                <Form.Row>
                    <Form.Group as={Col} xs="12" md="6">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter project name" name="name" />
                    </Form.Group>

                    <Form.Group as={Col} xs="12" md="6">
                        <Form.Label>Tech Used</Form.Label>
                        <Form.Control type="text" placeholder="Enter technologies used seperated by commas" name="tech" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs="12" md="6">
                        <Form.Label>Github URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter github url" name="github" />   
                    </Form.Group>

                    <Form.Group as={Col} xs="12" md="6">
                        <Form.Label>Project URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter working project url" name="url" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs="12" md="6">
                        <Form.Label>Upload Project Image</Form.Label>
                        <Form.Control type="file" accept="image/*" name="img" />
                    </Form.Group>


                    <Form.Group as={Col} xs="12" md="6">
                        <br />
                        <Form.Check type="switch" id="custom-switch" label="Is this a Heroku app?" name="isHeroku" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control as="textarea" name="desc" />
                </Form.Row><br />

                <Form.Row>
                    <Button type="submit">Submit</Button>
                </Form.Row>
            </Form>
        )
    }
}
