import React, { Component } from 'react';

import StackTag from './stackTag';

import banner from '../res/images/logo.png';
import FeatureTag from './FeatureTag';

class Stack extends Component {
    state = {}

    cardStyle = {
        boxShadow: '0 0 15px rgba(10, 10, 10, 0.3)',
    }

    render() {
        return (
            <div className='card col-lg-3 mx-4 col-sm-5 mt-3 mb-3' style={this.cardStyle}>
                <img src={banner} />
                <StackTag />
                <div className="card-body">
                    <h4 className="card-title mt-4">Tomstack</h4>
                    <p className="card-text small">
                        Apache Tomcat is a free and open-source implementation of the Jakarta Servlet,
                        Jakarta Expression Language,
                        and WebSocket technologies. Tomcat provides a "pure Java" HTTP web server
                        environment in which Java code can run.
                    </p>
                </div>
                <div className='row mx-1'>
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                    <FeatureTag />
                </div>
                <button className='btn btn-primary mb-2'>Launch</button>
            </div>
        );
    }
}

export default Stack;