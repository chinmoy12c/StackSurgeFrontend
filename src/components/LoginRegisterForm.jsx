import React, { Component } from 'react';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { LOGIN_URL, REGISTER_URL } from '../config/AppConstants';

class LoginRegisterForm extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    state = {
        buttonText: 'Login',
        apiEndPoint: LOGIN_URL,
        emailValue: '',
        passwordValue: '',
    }

    constructor(props) {
        super(props);
        if (props.action === 'register')
            this.state = this.getRegisterState();
    }

    getRegisterState = () => {
        let state = { ...this.state };
        state.buttonText = 'Register';
        state.apiEndPoint = REGISTER_URL
        return state;
    }

    handleInputChange = (event) => {
        if (event.target.id === 'inputEmail')
            this.setState({ emailValue: event.target.value.trim() });
        else if (event.target.id === 'inputPassword')
            this.setState({ passwordValue: event.target.value.trim() });
    }

    makeRequest = async () => {
        const email = this.state.emailValue;
        const pass = this.state.passwordValue;
        if (email === '' || pass === '') return;
        console.log(this.state.apiEndPoint);
        const response = await axios.post(this.state.apiEndPoint, {
            'email': email,
            'password': pass
        },
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
        
        //TODO: handle failed requests
        if (response.data.error == null) {
            const {cookies} = this.props;
            cookies.set('authToken', response.data.response, {sameSite: 'Strict'});
            window.location = '/'
        }
        else {
            //TODO: handle this
            console.log(response.data.error);
        }
    }

    render() {
        return (
            <div className='col-lg-6 col-sm-12 card d-flex justify-content-center'>
                <div>
                    <form>
                        <div className='form-group mb-4 mt-4 px-3'>
                            <label htmlFor='inputEmail'>Email address</label>
                            <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp' placeholder='Enter email' onChange={this.handleInputChange} />
                            <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                        </div>
                        <div className='form-group mb-4 px-3'>
                            <label htmlFor='inputPassword'>Password</label>
                            <input type='password' className='form-control' id='inputPassword' placeholder='Password' onChange={this.handleInputChange} />
                        </div>
                        <div className='form-group form-check ml-3'>
                            <input type='checkbox' className='form-check-input' id='rememberMeCheck' />
                            <label className='form-check-label' htmlFor='rememberMeCheck'>Remember me</label>
                        </div>
                    </form>
                    <button className='btn btn-primary mb-4 ml-3 px-5' onClick={this.makeRequest}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default withCookies(LoginRegisterForm);