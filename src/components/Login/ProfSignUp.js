import React, { Component } from 'react';
import { Grid, TextField, Typography, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import CustomInputList from '../utils/CustomInputList'


@inject("signUpStore")
@observer
class ProfSignUp extends Component {

    inputHandler = e => {
        this.props.signUpStore.inputHandler(e.target.name, e.target.value)
    }

    changeArea = e => this.props.signUpStore.changeArea(e.target.id, e.target.checked, e.target.value)

    selectorHandle = (name, value) => this.props.signUpStore.inputHandler(name, value);

    setRegions = () => {
        return (
            this.props.signUpStore.areasList.map((region,i) => 
                <FormControlLabel
                    key={i}
                    control={
                        <Checkbox id={region.name} value={region.id} onChange={this.changeArea} color="primary" />}
                    label={region.name} />
            )

        )
    }

    render() {
        const store = this.props.signUpStore;
        const profList = store.proffessionsList.map(p => {
            return { value: p.profId, label: p.profName }
        })

        return (
            <Grid item >
                <Grid container spacing={4} style={{ marginTop: "10px", padding: "5px" }} justify="center" alignItems="center">
                    <Grid item xs={12} >

                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h4">Profession</Typography>
                        </Grid>

                    </Grid>
                    <Grid item >
                        <TextField name="desc" label="Description"
                            onChange={this.inputHandler} />
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="center">
                            <CustomInputList suggestions={profList} placeholder="Profession" inputId="prof-name" label="Profession" name="profId"
                                onItemSelect={this.selectorHandle} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} >
                        
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h5">In which region will you work?</Typography>
                        </Grid>

                    </Grid>

                    <Grid item xs={12}>
                        <FormGroup row>
                            {this.setRegions()}
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ProfSignUp;