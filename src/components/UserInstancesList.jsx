import React, { Component } from 'react';
import UserInstance from './UserInstance';

class UserInstancesList extends Component {
    state = {
        instances: [
            {},
            {},
            {}
        ]
    }

    render() {
        return (
            <div col-lg-12>
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

export default UserInstancesList;