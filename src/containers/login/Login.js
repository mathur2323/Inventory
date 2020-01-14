import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, FormText, Button, Container } from 'reactstrap';
import axios from 'axios'
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserRequest } from './../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner';
import { ErrorMessage, ProcessLoader } from './../../components/wrappers';
import './scss/login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            country: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let reqObj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUserRequest(reqObj)
    }

    render() {
        if (sessionStorage.getItem("access_token")) {
            return <Redirect to="/dashboard" from="/" />
        }
        return (
            <Container fluid className="loggedOutWrapper">
                <Col md={{ offset: 5, size: 2 }}>
                    <h2>Sign In</h2>
                    <p>Login to your inventory!</p>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Email Address"
                                onChange={this.handleInput} value={this.state.email} />
                            <FontAwesomeIcon icon={faUser} className="icon" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" placeholder="Password"
                                onChange={this.handleInput} value={this.state.password} />
                            <FontAwesomeIcon icon={faLock} className="icon" />
                        </FormGroup>
                        <FormGroup check className="text-left font-small font-bold margin-bottom-16">
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Keep me logged in
                            </Label>
                        </FormGroup>
                            <ErrorMessage errMsg={this.props.errMsg} />
                        <Button className="fullSizeButton margin-bottom-16">Sign In</Button>
                        <div className="other-options">
                            <NavLink to="/" className="font-small font-bold">Forgot Password ?</NavLink>
                            <NavLink to="/signup" className="font-small font-bold">Create Account</NavLink>
                        </div>
                    </Form>
                </Col>
                <ProcessLoader processing={this.props.processing} />
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    isUserLoggedIn: state.login.isUserLoggedIn,
    processing: state.login.processing,
    errMsg:state.login.errMsg
})

const mapDispatchToProps = dispatch => ({
    loginUserRequest: reqObj => dispatch(loginUserRequest(reqObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
