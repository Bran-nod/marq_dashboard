import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Alert, Form, Row} from "react-bootstrap";
import {setError, setIsAuth, setUser} from "../store/user/userSlice";
import logo from '../assets/images/logo.png'
import {useNavigate} from "react-router-dom";
import {COURSES_LIST_ROUTE} from "../routes";


const Auth = () => {
    const {isAuth, error} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            return navigate(COURSES_LIST_ROUTE);
        }
    }, );

    const loginClick = () => {
        dispatch(setIsAuth(true))
        dispatch(setUser({
            email: 'pirogovoe@gmail.com',
            role: 'Methodist'
        }))
    }

    return (
        <Container>
            <Row className={"align-content-center vh-100  justify-content-center"}>
                <Col md={5}>
                    <Form className={"text-center"}>
                        <h2 className={"my-3"}>
                            <img src={logo} alt={"logo"} className={"me-1"} style={{transform: "translateY(-3px)"}}/>
                            <span>Marq.host</span>
                        </h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>

                        <Button variant="primary"
                                type="submit"
                                className={"px-3"}
                        >
                            Login
                        </Button>
                        {error && <Alert className={"mt-3"} variant={"danger"}> {error.message}</Alert>}
                    </Form>
                </Col>
            </Row>
            <Button style={{position: "absolute", right: 20, bottom: 20}} onClick={loginClick}>Login Emulation</Button>
            <Button style={{position: "absolute", right: 20, bottom: 70}}
                    variant={"danger"}
                    onClick={() => dispatch(setError(
                        {
                                    message: 'mock error msg'
                               }
                    ))}
            >Error auth Emulation</Button>
        </Container>
    );
};

export default Auth;