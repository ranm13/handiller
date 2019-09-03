import React, { Component } from 'react';
import '../../styles/App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';

@inject('logInStore')
@observer
class Root extends Component {

    inputHandler = e => this.props.logInStore.inputHandler(e.target.name, e.target.value)

    render() {
        const store = this.props.logInStore;
        return (
            <div>
                <Grid container justify="center" direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <TextField name="email" label="Email" onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <TextField name="pass" label="Password" type="password"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary"
                            onClick={store.login}>Login</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary"
                            component={Link} to="/signup">Sign up</Button>
                    </Grid>
                </Grid>
            </div>
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