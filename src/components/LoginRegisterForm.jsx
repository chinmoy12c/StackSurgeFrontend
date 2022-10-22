import React, { Component } from 'react';
import { LOGIN_URL, REGISTER_URL } from '../config/AppConstants';

class LoginRegisterForm extends Component {

    state = {
        buttonText: 'Login',
        apiEndPoint: { LOGIN_URL },
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
        state.apiEndPoint = { REGISTER_URL }
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
        console.log(this.state);
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
                        <button type='submit' className='btn btn-primary mb-4 ml-3 px-5' onClick={this.makeRequest}>{this.state.buttonText}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginRegisterForm;