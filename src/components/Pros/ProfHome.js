import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'



class ProfHome extends Component {
    render() {
        return (
            <Grid container spacing={2} style={{marginTop: "1.5vh"}}>
                <Grid item xs={9}>
                  <CalendarComp />
                </Grid>
                <Grid item xs={3}> 
                    <Requests /> 
                </Grid> 
            </Grid>
            )
    }
}
export default ProfHome