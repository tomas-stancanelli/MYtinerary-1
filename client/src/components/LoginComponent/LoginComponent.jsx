import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { GoogleLogin } from 'react-google-login';

const LoginComponent = (props) => {
    return (

        <Container>

            <h4 className="mt-3 mb-4">Log in here!</h4>

            <Form onSubmit={props.onSubmit}>

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
                        Password:
                   </Form.Label>
                    <Col sm="10">
                        <Form.Control name="password" type="password" onChange={props.onChange} />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>

            </Form>

            <br></br>

            <GoogleLogin
                clientId="512567094266-nkklvp40467jdf1vgm2agilce1ctg39g.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={props.responseGoogle}
                onFailure={props.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

        </Container>
    );
};

export default LoginComponent;