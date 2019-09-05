import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'

@inject("professionalStore", 'logInStore')

@observer
class ProfHome extends Component {

    componentDidMount() {
        console.log(this.props.logInStore.userId)
        this.props.professionalStore.getPersonalData(this.props.logInStore.userId)
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