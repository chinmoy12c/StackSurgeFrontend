import React, { Component } from 'react'
import {withCookies, Cookies} from 'react-cookie';
import {instanceOf} from 'prop-types';

import Navbar from '../components/Navbar';
import StackList from '../components/StackList';

import UserInstancesList from '../components/UserInstancesList';

class HomePage extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    constructor(props) {
        super(props);
        const {cookies} = this.props;
        this.state = {
            shouldRender: false,
            shouldRedirect: !cookies.get('authToken')
        }
    }

    componentDidMount() {
        const {shouldRedirect} = this.state;
        if (shouldRedirect)
            window.location = '/login';
        else
            this.setState({shouldRender: true});
    }

    render() {
        return this.state.shouldRender && (
            <div>
                <Navbar />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-12'>
                            <UserInstancesList />
                        </div>
                        <div className='col-lg-9 col-sm-12'>
                            <StackList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(HomePage);