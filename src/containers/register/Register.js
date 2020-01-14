import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, FormText, Button, Container } from 'reactstrap';
import axios from 'axios'
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserRequest } from './../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage, ProcessLoader } from './../../components/wrappers';
import './scss/register.scss';


class Register extends Component {
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
            password: this.state.password,
            country: this.state.country
        }
        this.props.registerUserRequest(reqObj)
    }
    render() {
        if (sessionStorage.getItem("access_token")) {
            return <Redirect to="/dashboard" from="/signup" />
        }
        return (
            <Container fluid className="loggedOutWrapper">
                <Col md={{ offset: 5, size: 2 }}>
                    <h2>Sign Up</h2>
                    <p>Register to maintain your Inventory</p>
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
                        <FormGroup>

                            <Input type="select" name="country" onChange={this.handleInput} value={this.state.country}>
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                                <option value="Europe">Europe</option>
                                <option value="Australia">Australia</option>
                                <option value="United States Of America">United States Of America</option>
                            </Input>
                        </FormGroup>
                            <ErrorMessage errMsg={this.props.errMsg} />
                        <Button className="fullSizeButton margin-bottom-16">Sign Up</Button>
                        <div className="text-center">
                            <span className="color-white">Already a user? <NavLink className="color-white" to="/">Sign In</NavLink></span>
                        </div>
                        <ProcessLoader processing={this.props.processing} />
                    </Form>
                </Col>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    errMsg: state.register.errMsg,
    processing: state.register.processing
})

const mapDispatchToProps = dispatch => ({
    registerUserRequest: reqObj => dispatch(registerUserRequest(reqObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
