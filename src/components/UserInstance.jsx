import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';

import StackTag from './stackTag';
import { HEADERS, SERVER_IP, STOP_INSTANCE_URL } from '../config/AppConstants';

import instanceBack from '../res/images/instance-background.jpg';
import Loader from './Loader';

class UserInstance extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    state = {
        isLoading: false
    }

    connectInstance = () => {
        if (this.state.isLoading) return;
        window.open(`${SERVER_IP}:${this.props.instance.port}/vnc.html?resize=remote&host=127.0.0.1`, '_blank');
    }

    terminateInstance = async () => {
        if (this.state.isLoading) return;
        this.setState({ isLoading: true });
        const { cookies } = this.props;
        const response = await axios.post(STOP_INSTANCE_URL, {
            'jwt': cookies.get('authToken', ''),
            'containerId': this.props.instance.stackContainerId
        }, { headers: HEADERS });

        if (response.data.success) {
            this.setState({ isLoading: false });
            this.props.onDelete(this.props.instance.id);
        }
        else {
            //TODO: handle this
            if (response.data.statusCode == '401') {
                cookies.remove('authToken');
                window.location = '/login';
            }
            console.log(response.data.error);
        }
    }

    render() {
        return (
            <div className='card col-lg-10 col-sm-5 mb-3 mr-3'>
                <img className='mt-2' src={instanceBack} />
                <StackTag codename={this.props.instance.techStack.codename} />
                {this.state.isLoading && <Loader absolute={true} />}
                <h5 className='mt-2 text-capitalize'>{this.props.instance.techStack.name}</h5>
                <p>Created on: {this.props.instance.creationTimeRep}</p>
                <button className={`btn btn-primary mb-2 ${this.state.isLoading ? 'disabled' : ''}`} onClick={this.connectInstance}>Connect</button>
                <button className={`btn btn-primary mb-2 ${this.state.isLoading ? 'disabled' : ''}`} onClick={this.terminateInstance}>Terminate</button>
            </div>
        );
    }
}

export default withCookies(UserInstance);