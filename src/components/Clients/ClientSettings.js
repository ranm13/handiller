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


        let gridContainer = {
            width: "100vw",
            height: "91.2vh",
            margin: "0.3vh 0",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url('https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')"
        }

        let personalDataInputs = this.props.clientStore.personalDataInputs

        return (
            <Grid container style={ gridContainer } justify="center" alignItems="center">
                <Grid item>
                    <Paper style={{ width:"50vw", opacity: "0.95" }}>
                        <Grid container style={{ height:"14vh" }} justify="center" alignItems="center">
                            <Grid item >
                                <Typography variant="h4" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Update Personal Data</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} style={{height:"65vh"}} justify="center" alignItems="center">
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