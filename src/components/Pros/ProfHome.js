import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import CalendarComp from './CalendarComp'
import Requests from './Requests'


@observer
@inject("professionalStore")
@inject('logInStore')
@inject('logInStore')
class ProfHome extends Component {

    componentDidMount() {
        this.props.clientStore.getPersonalData(this.props.logInStore.userId)
        this.props.professionalStore.getPersonalData(this.props.logInStore.user.userId)
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