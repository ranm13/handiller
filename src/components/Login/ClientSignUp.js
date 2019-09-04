import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import CustomInputList from '../utils/CustomInputList'

@inject("signUpStore")
@observer
class ClientSignUp extends Component {

    inputHandler = (e) => {
        this.props.signUpStore.inputHandler(e.target.name, e.target.value)
    }

    selectorHandle = (name, value) => this.props.signUpStore.inputHandler(name, value)

    render() {
        const store = this.props.signUpStore;
        const cityList = store.citiesList.map(c => {
            return { value: c.cityNum, label: c.name }
        })
        return (
            <Grid item >
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item>
                        <TextField name="firstName" label="First Name"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <TextField name="lastName" label="Last Name"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <TextField name="address" label="Address"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" alignItems="center">
                            <CustomInputList suggestions={cityList} placeholder="City" inputId="city-name" label="City" name="cityNum"
                                onItemSelect={this.selectorHandle} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField name="email" label="Email"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <TextField name="phone" label="Phone"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <TextField name="pass" label="Password" type="password"
                            onChange={this.inputHandler} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ClientSignUp;