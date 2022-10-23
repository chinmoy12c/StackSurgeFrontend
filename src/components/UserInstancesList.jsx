import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import axios from 'axios';

import UserInstance from './UserInstance';
import { HEADERS, USER_INSTANCES_URL } from '../config/AppConstants';
import Loader from './Loader';

class UserInstancesList extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    state = {
        instances: [],
        isLoading: true
    }

    componentDidMount() {
        this.getUserInstances();
    }

    onInstanceDelete = (instanceId) => {
        const instances = this.state.instances.filter(instance => instance.id != instanceId);
        this.setState({ instances: instances });
    }

    getUserInstances = async () => {
        const { cookies } = this.props;
        const response = await axios.post(USER_INSTANCES_URL, {
            'jwt': cookies.get('authToken', '')
        }, { headers: HEADERS });

        if (response.data.success) {
            this.setState({ instances: JSON.parse(response.data.response), isLoading: false });
            console.log(response.data.response);
        }
        else {
            //TODO: Handle error
            if (response.data.statusCode == '401') {
                cookies.remove('authToken');
                window.location = '/login';
            }
            console.log(response.data.error);
        }
    }

    render() {
        return (
            <div>
                <div className='mt-3'>
                    <h4 className='text-center'>Running Instances</h4>
                    <hr className='col-lg-8'></hr>
                </div>
                {(this.state.isLoading && <Loader />) ||
                    <div className='row d-flex justify-content-center'>
                        {this.state.instances.map(instance => <UserInstance key={instance.id} instance={instance} onDelete={this.onInstanceDelete} />)}
                    </div>
                }
            </div>
        );
    }
}

export default withCookies(UserInstancesList);