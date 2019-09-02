import React, { Component } from 'react';
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import CustomInputList from '../utils/CustomInputList'


@inject("signUpStore")
@observer
class ClientSignUp extends Component {

    signupOnClick = (a) => {
        this.props.signUpStore.signup(a)
    }

    componentDidMount = () => this.props.signUpStore.getCities()

    render() {
        const store = this.props.signUpStore;
        const cityList = store.citiesList.map(c => {
            return {value: c.cityNum, label: c.name}
        })
        return (
            <Grid container style={{ width: "100vw" }} justify="center" alignItems="center">
                <Grid item >
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="h4"> Welcome to Handiler</Typography>
                        <Typography variant="h6">The best place to find a Technician !</Typography>
                    </Grid>
                    <Paper elevation={4} style={{ margin: "2vh", padding: "5vh", width: "50vw" }}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4">Please provide the following</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify="center" alignItems="center">
                            <Grid item>
                                <TextField label="First Name" />
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" />
                            </Grid>
                            <Grid container justify="center" alignItems="center">
                            <CustomInputList suggestions={cityList} placeholder="City" inputId="city-name" label="City" />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" />
                            </Grid>
                            <Grid item>
                                <TextField label="Phone" />
                            </Grid>
                            <Grid item>
                                <TextField label="Password" type="password" />
                            </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "5vh" }} justify="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.signupOnClick}>Confirm</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default ClientSignUp;