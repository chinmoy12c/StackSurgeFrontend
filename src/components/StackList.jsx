import React, { Component } from 'react'
import Stack from './Stack';

class StackList extends Component {
    state = {
        stacks: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    }

    render() {
        return (
            <div className='col-md-12'>
                <div className='mt-3'>
                    <h5 className='text-center'>Choose your stack</h5>
                    <hr className='col-md-10' />
                </div>
                <div className='row flex-d justify-content-center'>
                    {this.state.stacks.map(stack => <Stack />)}
                </div>
            </div>
        );
    }
}

export default StackList;