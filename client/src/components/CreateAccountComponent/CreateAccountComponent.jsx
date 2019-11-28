import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CreateAccountComponent = (props) => {
    return (
        <Container>
            <h4 className="mt-3 mb-4">Create your account here!</h4>

            <Form onSubmit={props.onSubmit}>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Username:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="username" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Password:
                   </Form.Label>
                    <Col sm="10">
                        <Form.Control name="password" type="password" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Email:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="email" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        First name:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="firstname" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Last name:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="lastname" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Country:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="country" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Profile photo URL:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control name="image" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

        </Container>
    );
};

export default CreateAccountComponent;