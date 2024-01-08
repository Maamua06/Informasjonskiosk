import React from "react";
import axios from "axios";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const submitLoginForm = (e) => {
        e.preventDefault();
    }
    return ( 
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Login to React</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id='loginForm' onSubmit={submitLoginForm}>
                        <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                                <input type={'text'} className="form-control" id={'login-username'} name="username" required />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="password" required />
                            </FormGroup>
                            <Button className="btn-success mt-2" type='submit' id='login-btn' >Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default Login;