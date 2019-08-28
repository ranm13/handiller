import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'

@inject("professionalStore")

@observer
class ProfSettings extends Component {
    render() {
        let personalData = this.props.professionalStore.personalData
        return (
            <Grid container style={{width: "100vw"}} justify="center" alignItems="center">
                <Grid item>
                    <Paper style={{marginTop: "5vh", width: "60vw"}}>
                        <Grid container style={{height:"5vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4">Update Personal Data</Typography>
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
                                <TextField  label="Password" type="password"/> 
                            </Grid>
                            <Grid item>
                                <TextField  label="City" defaultValue={personalData.city} /> 
                            </Grid>
                            <Grid item>
                                <TextField  label="Profession" defaultValue={personalData.profession} />
                            </Grid>
                            <Grid item>
                                <TextField  label="Description" multiline rowsMax="4" defaultValue={personalData.description}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{height:"15vh"}} justify="center" alignItems="center">
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
export default ProfSettings 
