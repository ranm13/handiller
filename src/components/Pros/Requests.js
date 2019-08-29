import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import RowRequests from './RowRequests'

@inject("professionalStore")

@observer
class Requests extends Component {

    render() {
        let professionalStore = this.props.professionalStore
        return (
            <Grid container spacing={2} container direction="column" justify="flex-start" alignItems="center">
                {professionalStore.pendingRequests.map(i => 
                <Grid item key={i.appointmentId} >
                    <RowRequests key={i.appointmentId} appointmentData={i} />
                </Grid>)}
            </Grid>
        )
    }
}
export default Requests
