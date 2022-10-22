import React, { Component } from 'react';

class FeatureTag extends Component {

    tagStyle = {
        background: '#eee',
        borderRadius: '3px 0 0 3px',
        color: '#999',
        display: 'inline-block',
        height: '26px',
        lineHeight: '26px',
        padding: '0 20px 0 23px',
        position: 'relative',
        margin: '0 1px 15px 0',
        textDecoration: 'none',
        fontSize: '12'
    }

    render() {
        return (
            <span className='badge badge-primary px-2 mx-2 mb-2'>Tomcat</span>
        );
    }
}

export default FeatureTag;