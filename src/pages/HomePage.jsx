import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import StackList from '../components/StackList';

import UserInstancesList from '../components/UserInstancesList';

class HomePage extends Component {
    render() {
        return (
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

export default HomePage;