import React, { Component } from 'react'
import axios from 'axios';

import Stack from './Stack';
import { HEADERS, STACK_URL } from '../config/AppConstants';
import Loader from './Loader';

class StackList extends Component {
    state = {
        stacks: [],
        isLoading: true
    }

    componentDidMount() {
        this.getAvailableStacks();
    }

    getAvailableStacks = async () => {
        const response = await axios.post(STACK_URL, {}, { headers: HEADERS });
        if (response.data.success) {
            const availableStacks = JSON.parse(response.data.response);
            this.setState({ stacks: availableStacks, isLoading: false });
            console.log(availableStacks);
        }
        else {
            //TODO: handle this
            console.log(response.data.error);
        }
    }

    render() {
        return (
            <div className='col-md-12'>
                <div className='mt-3'>
                    <h4 className='text-center'>Choose your stack</h4>
                    <hr className='col-md-10' />
                </div>
                {(this.state.isLoading && <Loader />) ||
                    <div className='row flex-d justify-content-center'>
                        {this.state.stacks.map(stack => <Stack key={stack.id} stack={stack} />)}
                    </div>
                }
            </div>
        );
    }
}

export default StackList;