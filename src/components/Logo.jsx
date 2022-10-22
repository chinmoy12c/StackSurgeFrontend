import React, { Component } from 'react'

import logo from '../res/images/logo.png';

class Logo extends Component {
    render() {
        return (
            <div className='col-lg-6 col-sm-12 card'>
                <img className='img img-fluid' src={logo} />
            </div>
        );
    }
}

export default Logo;