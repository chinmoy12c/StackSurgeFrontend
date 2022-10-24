import React, { Component } from 'react'

import tomstackTag from '../res/images/tomstack.jpeg';
import codestackTag from '../res/images/codestack.png';
import baseSystemTag from '../res/images/base-system.jpg';

class StackTag extends Component {

    tagStyle = {
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(10, 10, 10, 0.3)',
        position: 'absolute',
        top: '20px',
        left: '1.25rem',
        width: '5em',
        height: '5em'
    }

    resolveIcon = (codename) => {
        if (codename === 'TOM') return tomstackTag;
        else if (codename === 'CODE') return codestackTag;
        else return baseSystemTag;
    }

    render() {
        return (
            <img className='card' style={this.tagStyle} src={this.resolveIcon(this.props.codename)} />
        );
    }
}
 
export default StackTag;