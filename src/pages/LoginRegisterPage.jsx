import React, { Component } from 'react';
import Logo from '../components/Logo';
import LoginRegisterForm from '../components/LoginRegisterForm';

class LoginRegisterPage extends Component {
    state = {}

    render() {
        return (
            <div className='container-fluid mt-4'>
                <div className='row mx-auto bg-dark text-white px-3 pt-2'>
                    <h5 className='navbar-brand'>StackSurge</h5>
                </div>
                <div className='row mx-auto d-flex justify-content-center'>
                    <Logo type='banner' />
                    <LoginRegisterForm action={this.props.action} />
                </div>
                <div className='ow mx-auto d-flex bg-dark text-white px-3 pt-2 pb-2'>
                    <small>Copyright @2022. All rights reserved.</small>
                </div>
            </div>
        )
    }
}

export default LoginRegisterPage;