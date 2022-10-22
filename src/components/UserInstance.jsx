import React, { Component } from 'react';

import StackTag from './stackTag';

import instanceBack from '../res/images/instance-background.jpg';

class UserInstance extends Component {
    state = {  }

    render() {
        return (
            <div className='card col-lg-10 col-sm-5 mb-3 mr-3'>
                <img class='mt-2' src={instanceBack}/>
                <StackTag />
                <h5 className='mt-2'>Tomstack</h5>
                <p>Uptime: 1d 13h</p>
                <button className='btn btn-primary mb-2'>Connect</button>
                <button className='btn btn-primary mb-2'>Terminate</button>
            </div>
        );
    }
}
 
export default UserInstance;