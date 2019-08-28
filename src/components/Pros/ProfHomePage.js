import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'


@observer
class ProfHomePage extends Component {
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
export default ProfHomePage