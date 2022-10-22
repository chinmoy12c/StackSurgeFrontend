import React, { Component } from 'react'

import tomstackTag from '../res/images/tomstack.jpeg';

class StackTag extends Component {
    state = {  }

    tagStyle = {
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(10, 10, 10, 0.3)',
        position: 'absolute',
        top: '70px',
        left: '1.25rem',
        width: '70px',
        height: '70px'
    }

    render() { 
        return (
            <img className='card' style={this.tagStyle} src={tomstackTag} />
        );
    }
}
 
export default StackTag;