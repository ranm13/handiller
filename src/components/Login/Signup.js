import React, { Component } from 'react';
import { Paper, Grid, Button, Typography } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import ClientSignUp from './ClientSignUp';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProfSignUp from './ProfSignUp';


@inject("signUpStore")
@observer 
class Signup extends Component {

    signupOnClick = () => this.props.signUpStore.signup()

    componentDidMount = () => {
        this.props.signUpStore.getCities();
        this.props.signUpStore.getProffessions();
        this.props.signUpStore.getRegions();
        this.props.signUpStore.userData = {};
        this.props.signUpStore.isProf = false;
    }

    setProffesional = e => this.props.signUpStore.setProffesional(e.target.checked)

    render() {

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item >
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="h4"> Welcome to Handiler</Typography>
                        <Typography variant="h6">The best place to find a Technician !</Typography>
                    </Grid>
                    <Paper elevation={4} style={{ margin: "2vh", padding: "5vh", width: "50vw" }}>
                        <Grid container justify="center" direction="column" alignItems="center">

                            <Grid item>
                                <Typography variant="h4">Please provide the following</Typography>
                            </Grid>

                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Switch onChange={this.setProffesional} color="primary" />
                                    }
                                    label="Proffesional"
                                />
                            </Grid>

                            <Grid item>
                                <ClientSignUp />
                            </Grid>

                            <Grid item>
                                {this.props.signUpStore.isProf ? <ProfSignUp /> : null}
                            </Grid>


                        </Grid>

                        <Grid container style={{ marginTop: "5vh" }} justify="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary"
                                    onClick={this.signupOnClick}>Confirm</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Signup;