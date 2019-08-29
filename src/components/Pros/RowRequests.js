import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Button, Typography } from '@material-ui/core'
import moment from "moment"

@inject('professionalStore')

@observer
class RowRequests extends Component {
    handleOpen = (e) => {
        let appointmentData = this.props.appointmentData
        let status = (e.currentTarget.outerText === "DECLINE"? "declined"
        :e.currentTarget.outerText === "APPROVE"?  "approved" :null)
        let data = {
            status: status,
            startDate: appointmentData.startDate,
            endDate: appointmentData.endDate,
            title: appointmentData.title
        }
        this.props.professionalStore.changeStatusRequest(this.props.appointmentData.appointmentId, data)
    }
    
    render() {
        let appointmentData = this.props.appointmentData
        return (
            <div>
                <Paper key={this.props.key}>
                    <Typography variant="h6">{appointmentData.title}</Typography>
                    <Typography variant="h6">{moment(appointmentData.startDate).format('L')}</Typography>
                    <Typography variant="h6">{moment(appointmentData.startDate).format('LT')}-{moment(appointmentData.endDate).format('LT')}</Typography>
                    <Button variant="contained" color="secondary" onClick={this.handleOpen}>DECLINE</Button>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>APPROVE</Button>
                </Paper>
            </div>)
    }
}
export default RowRequests