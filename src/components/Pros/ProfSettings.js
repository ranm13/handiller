import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Paper, Grid, Button, Typography, TextField } from '@material-ui/core'

@observer
class ProfSettings extends Component {
    render() {
        return (
            <Paper>
                <Grid container spacing={1} container direction="column" alignItems="center" justify="center">
                    <Grid item><Typography variant="h4">Update Personal Data</Typography></Grid>
                    <Grid item> <Typography variant="h5">First Name: <TextField  label="New First Name"  /></Typography></Grid>
                    <Grid item> <Typography variant="h5">Last Name: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">Email: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">Phone: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">Password: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">City: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">Profession: </Typography> </Grid>
                    <Grid item> <Typography variant="h5">Description: </Typography> </Grid>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>APPROVE Changes</Button>
                </Grid>        
            </Paper>
                
        )

    }
}
export default ProfSettings