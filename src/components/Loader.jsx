import React, { Component } from 'react';

class Loader extends Component {

    spinnerStyle = {
        width: '5em',
        height: '5em',
        color: '#223399',
        zIndex: 100
    }

    absoluteLoaderStyle = {
        position: 'absolute',
        top: '20px',
        left: '1.25rem',
        zIndex: 100
    }

    render() {
        return (
            <div className='text-center mb-2'>
                <div className='spinner-grow' style={this.props.absolute ? { ...this.spinnerStyle, ...this.absoluteLoaderStyle } : { ...this.spinnerStyle }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Loader;