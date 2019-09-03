import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'


@observer
@inject("professionalStore")
class ProfHome extends Component {

    componentDidMount() {
        this.props.professionalStore.getPersonalData(2)
      }

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