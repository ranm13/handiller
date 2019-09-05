import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/index.css';
import { observer, inject } from 'mobx-react'
import { Link, Redirect } from 'react-router-dom'
import { Grid, Typography, Paper } from '@material-ui/core';
import Login from './Login';


@inject('logInStore')

@observer
class Root extends Component {

    login = () => {
        const user = this.props.logInStore.user;
        if(user.isProf)
            return <Redirect push to="/prof/home"/>
        else
            return <Redirect push to="/client/home"/>

    }

    render() {
        const user = this.props.logInStore.user;
        let rootStyle = {
            padding: "2vh 1vw 1vh 1vw",
            margin: "0.3vh auto",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url('https://images.unsplash.com/photo-1500472141701-084e6fa44840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`
        }
        return (
           
                <Grid id="app_root" container direction="column" justify="center" alignItems="center" spacing={10} style={rootStyle}>
                     <Paper style={{padding: "15px", opacity: "0.95"}}>
                    <Login />
                    <Typography variant="subtitle2" component={Link} to="/signup">Haven't got a user yet !? Click here to Sign up</Typography>
                    </Paper>
                    {user.isLogin ? this.login() : null}
                </Grid>
            
        );
    }
}

export default Root;