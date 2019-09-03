import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import RowRequests from './RowRequests'

@inject("professionalStore")

@observer
class Requests extends Component {

    render() {
        let professionalStore = this.props.professionalStore
        let gridStyle = {
            width: "90%",
            margin: "1vh 0",
            backgroundPosition: "center",
            border: "3px solid black",
            minHeight: "83vh",
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNXvrGp5i2BF7egN74smoAktTy3FYexghhOZwolHRrJXRArzYUQ')"
        }

        return (
            <Grid container spacing={2} direction="column" justify="flex-start" alignItems="center" style={ gridStyle } >
                {
                    professionalStore.pendingRequests.map(i =>
                        <Grid item key={i.appointmentId} >
                            <RowRequests key={i.appointmentId} appointmentData={i} />
                        </Grid>)
                }
            </Grid >
        )
    }
}
export default Requests
