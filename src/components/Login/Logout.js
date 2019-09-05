import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'

@inject('logInStore')

@observer
class Logout extends Component {

    render() {
        this.props.logInStore.logout()
        return (
            <Redirect push to="/"/>
        );
    }
}

export default Logout;