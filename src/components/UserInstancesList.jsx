import React, { Component } from 'react';
import {withCookies, Cookie} from 'react-cookie';

import UserInstance from './UserInstance';

class UserInstancesList extends Component {
    state = {
        instances: [
            {},
            {},
        ]
    }

    render() {
        return (
            <div>
                <div className='mt-3'>
                    <h5 className='text-center'>Running Instances</h5>
                    <hr className='col-lg-8'></hr>
                </div>
                <div className='row d-flex justify-content-center'>
                    {this.state.instances.map(instance => <UserInstance />)}
                </div>
            </div>
        );
    }
}

export default withCookies(UserInstancesList);