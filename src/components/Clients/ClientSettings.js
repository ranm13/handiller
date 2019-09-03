import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'

@inject("clientStore")

@observer
class Settings extends Component {
    render() {
        let personalData = this.props.clientStore.personalData
        let gridContainer = {
            width: "100vw",
            height: "91.5vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url('https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')"
        }
        return (
            <Grid container style={ gridContainer } justify="center" alignItems="center">
                <Grid item>
                    <Paper style={{ width:"50vw", opacity: "0.95" }}>
                        <Grid container style={{ height:"14vh" }} justify="center" alignItems="center">
                            <Grid item >
                                <Typography variant="h4" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Update Personal Data</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} style={{height:"70vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <TextField label="First Name" defaultValue={personalData.firstName}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" defaultValue={personalData.lastName}  />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" defaultValue={personalData.email} />
                            </Grid>
                            <Grid item>
                                <TextField  label="Phone" defaultValue={personalData.phone} />
                            </Grid>
                            <Grid item>
                                <TextField  label="Password" type="password" /> 
                            </Grid>
                            <Grid item>
                                <TextField  label="City" defaultValue={personalData.city} /> 
                            </Grid>
                        </Grid>
                        <Grid container style={{ height:"15vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.handleOpen}>APPROVE Changes</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>    
        )
    }
}
export default Settings