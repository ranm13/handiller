import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'
import { Calendar } from 'react-big-calendar';


class ProfHome extends Component {
    render() {
        return (
            <Grid container spacing={1} >
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