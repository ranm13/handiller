import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Grid, TextField, Button } from '@material-ui/core';



@inject('logInStore')
@observer
class Login extends Component {

    
    inputHandler = e => this.props.logInStore.inputHandler(e.target.name, e.target.value)

    render() {
        const store = this.props.logInStore;
        return (
            <Grid container direction="column" alignItems="center" spacing={3}>
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
            </Grid>
        );
    }
}

export default Login;