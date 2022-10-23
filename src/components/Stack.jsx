import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';

import StackTag from './stackTag';

import banner from '../res/images/logo.png';
import FeatureTag from './FeatureTag';
import { HEADERS, LAUNCH_INSTANCE_URL } from '../config/AppConstants';

class Stack extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    cardStyle = {
        boxShadow: '0 0 15px rgba(10, 10, 10, 0.3)',
    }

    launchStack = async () => {
        const {cookies} = this.props;
        const response = await axios.post(`${LAUNCH_INSTANCE_URL}/${this.props.stack.codename}`, {
            'jwt': cookies.get('authToken', '')
        }, {headers: HEADERS});

        //TODO: handle response.data == undefined
        if (response.data.success) {
            window.location = '/';
        }
        else {
            //TODO: handle this
            console.log(response.data.error);
        }
    }

    render() {
        return (
            <div className='card col-lg-3 mx-4 col-sm-5 mt-3 mb-3' style={this.cardStyle}>
                <img src={banner} />
                <StackTag codename={this.props.stack.codename} />
                <div className="card-body">
                    <h4 className="card-title mt-4 text-capitalize">{this.props.stack.name}</h4>
                    <p className="card-text small">{this.props.stack.description}</p>
                </div>
                <div className='row mx-1'>
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                </div>
                <button className='btn btn-primary mb-2' onClick={this.launchStack}>Launch</button>
            </div>
        );
    }
}

export default withCookies(Stack);