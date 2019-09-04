import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Grid, Button, TextField, Typography } from '@material-ui/core'

@inject("professionalStore")
@observer
class ProfSettings extends Component {
    inputHandler = (e) =>{
        this.props.professionalStore.settingsInputHandler(e.target.name, e.target.value)
    }
    render() {
        let personalData = this.props.professionalStore.personalData
        let gridContainer = {
            width: "100vw",
            height: "91vh",
            margin: "0.3vh 0",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url('https://i2.nicepik.com/files/892/240/987/tools-set-handyman-hand.jpg')"
        }
        return (
            <Grid container style={ gridContainer } justify="center" alignItems="center">
                <Grid item>
                    <Paper style={{ width: "60vw", opacity: "0.95"}}>
                        <Grid container style={{height:"14vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Update Personal Data</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} style={{height:"65vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <TextField label="First Name" name={"firstName"} defaultValue={personalData.firstName} onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name"  name={"lastName"} defaultValue={personalData.lastName}  onChange={this.inputHandler} />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" name={"email"} defaultValue={personalData.email}  onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField  label="Phone" name={"phone"} defaultValue={personalData.phone}  onChange={this.inputHandler}/>
                            </Grid>
                            <Grid item>
                                <TextField  label="Password" name={"password"} type="password" onChange={this.inputHandler}/> 
                            </Grid>
                            <Grid item>
                                <TextField  label="City" name={"city"} defaultValue={personalData.city} onChange={this.inputHandler} /> 
                            </Grid>
                            <Grid item>
                                <TextField  label="Profession" name={"profession"} defaultValue={personalData.profession} onChange={this.inputHandler} />
                            </Grid>
                            <Grid item>
                                <TextField  label="Description" name={"description"} multiline rowsMax="4" defaultValue={personalData.description} onChange={this.inputHandler}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{height:"15vh"}} justify="center" alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.props.professionalStore.updatePersonalData}>APPROVE Changes</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>    
        )

    }
}
export default ProfSettings 
