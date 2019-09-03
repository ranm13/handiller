import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/index.css';
import { observer, inject } from 'mobx-react'
import { Link, Redirect } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core';
import Login from './Login';

@inject('logInStore')
@observer
class Root extends Component {

    login = () => {
        const user = this.props.logInStore.user;
        console.log(user)
        if(user.isProf)
            return <Redirect push to="/prof/home"/>
        else
            return <Redirect push to="/client/home"/>

    }

    render() {
        const user = this.props.logInStore.user;
        return (
            <Grid id="app_root" container justify="center" alignItems="center" spacing={10}>
                <Grid item>
                    <Login />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary"
                        component={Link} to="/signup">Sign up</Button>
                </Grid>

                {user.isLogin ? this.login() : null}
            </Grid>
        );
    }
}

export default Root;

/**
 * <Grid container justify="center" alignItems="center" style={{ height: "90vh" }} spacing={6}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={logInStore.enterToClient} to='/client/home' component={Link}>
                            Client
              </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={logInStore.enterToProf} to='/prof/home' component={Link}>
                            Professional
              </Button>
                    </Grid>
                </Grid>
 */