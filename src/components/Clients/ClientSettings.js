import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'

@observer
class Settings extends Component {
    render() {
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
                                <TextField label="First Name" defaultValue="foo"/>
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" defaultValue="foo"  />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" defaultValue="Hello World" />
                            </Grid>
                            <Grid item>
                                <TextField  label="Phone" defaultValue="Hello World" />
                            </Grid>
                            <Grid item>
                                <TextField  label="Password" type="password" /> 
                            </Grid>
                            <Grid item>
                                <TextField  label="City" defaultValue="Hello World" /> 
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