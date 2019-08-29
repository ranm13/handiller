import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'

@inject("clientStore")

@observer
class Settings extends Component {

    inputHandler = (e) =>{
        this.props.clientStore.settingsInputHandler(e.target.name, e.target.value)
    }

    render() {
        let personalDataInputs = this.props.clientStore.personalDataInputs
        return (
            <Grid container style={{width: "100vw"}} justify="center" alignItems="center">
                <Grid item>
                    <Paper style={{marginTop: "5vh", width: "50vw"}}>
                        <Grid container style={{ height:"5vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4">Update Personal Data</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} style={{height:"70vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <TextField label="First Name" name={"firstName"} defaultValue={personalDataInputs.firstName} onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" name={"lastName"} defaultValue={personalDataInputs.lastName}  onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Email" name={"email"} defaultValue={personalDataInputs.email} onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField  label="Phone" name={"phone"} defaultValue={personalDataInputs.phone} onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField  label="Password" name={"password"} type="password" onChange={this.inputHandler}/> 
                            </Grid>
                            <Grid item>
                                <TextField  label="City" name={"city"} defaultValue={personalDataInputs.city} onChange={this.inputHandler}/> 
                            </Grid>
                        </Grid>
                        <Grid container style={{ height:"15vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.props.clientStore.updatePersonalData}>APPROVE Changes</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>    
        )
    }
}
export default Settings