import React, { useState } from 'react';
import { Col, Container, Row, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import login from '../../img/login.jpg'
import './Login.css'
import googleLogo from '../../img/google.png'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
const LogIn = () => {
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();
    const [logInPage, setLogInPage] = useState(true);
    const { handleNameChange, signInWithgoogle, setIsLoading, handlepasswordChnage, handleEmailChnage, processLogin, registerNewUser, setUserName, verifyEmail, name, email } = useAuth();
    const pageToggle = (s) => {
        setLogInPage(s)
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        registerNewUser(e)
            .then((result) => {
                setUserName()
                    .then(() => {
                        verifyEmail()
                            .then(result => {

                                const newUser = { name, email }
                                axios.post("https://intense-castle-18583.herokuapp.com/registerUser", newUser)
                                    .then(res => {
                                        history.push(redirect_uri)
                                        window.location.reload();
                                    })

                            })
                    }).catch((error) => {
                    });
            })
    }
    const handleGoogleLogIn = () => {
        signInWithgoogle()
            .then((result) => {

                const newUser = { name: result.user.displayName, email: result.user.email }
                axios.post("https://intense-castle-18583.herokuapp.com/AddUser", newUser)
                    .then(res => {
                        history.push(redirect_uri)
                    })



            }).finally(() => setIsLoading(false))
            .catch((error) => {

            });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        processLogin()
            .then((result) => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {

            });

    }
    return (
        <div className="bg-light">
            <Container className="py-5">
                <Row className="d-flex justify-content-center">
                    <Col md={6} className="bg-white">
                        <Row className="pb-4 custom-log-in-shadow">

                            <Col md={12} className="pt-5 input-email-pass">
                                <Image src={login} roundedCircle fluid className="login-img-shadow  mb-4 " />

                                <h4 className="text-center pb-3">{logInPage ? "User Login" : "Create a account"}</h4>
                                {
                                    !logInPage && <InputGroup className="mb-3 w-75" >
                                        <InputGroup.Text id="basic-addon1"><i class="far fa-envelope"></i></InputGroup.Text>
                                        <FormControl
                                            onBlur={handleNameChange}
                                            type="text"
                                            placeholder="Name"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"

                                        />
                                    </InputGroup>
                                }
                                <InputGroup className="mb-3 w-75" >
                                    <InputGroup.Text id="basic-addon1"><i class="far fa-envelope"></i></InputGroup.Text>
                                    <FormControl
                                        onBlur={handleEmailChnage}
                                        type="email"
                                        placeholder="email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"

                                    />
                                </InputGroup>
                                <InputGroup className="mb-3 w-75" >
                                    <InputGroup.Text id="basic-addon1"><i class="fas fa-lock"></i></InputGroup.Text>
                                    <FormControl
                                        onBlur={handlepasswordChnage}
                                        type="password"
                                        placeholder="Password"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <div className="py-3">
                                    {
                                        logInPage ? <Button variant="primary" onClick={handleLogin}>Login</Button>
                                            : <Button variant="primary" onClick={handleCreateAccount}>Register</Button>
                                    }
                                </div>
                                <p className="account-create mb-0" onClick={() => pageToggle(!logInPage)}>{logInPage ? " Not a member ? Create now?" : "Already have an account ? Login"}</p>

                                <hr className="hr-style" />
                                <p>Connect with social media</p>

                                <Image src={googleLogo} roundedCircle className="google-Icon" onClick={handleGoogleLogIn} />
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default LogIn;