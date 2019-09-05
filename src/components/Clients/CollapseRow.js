import React, {Component} from 'react'
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import  Button  from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Paper, Modal, Grid } from '@material-ui/core';
import PayPal from './Paypal';

@inject("clientStore")

@observer
class CollapseRow extends Component {
    cancelAppointment = () => {
        const appointmentData = this.props.appointmentData
        let data = {
            status: "declined",
            startDate: appointmentData.startDate,
            endDate: appointmentData.endDate,
            title: appointmentData.title
        }
        this.props.clientStore.updateAppointment(appointmentData.appointmentId, data)
    }

    render() {
        let text = this.props.text
        let appointmentData = this.props.appointmentData;
        const startDate = moment(appointmentData.startDate).format('L');
        return (
            <TableRow>
                <TableCell >{appointmentData.profName}</TableCell>
                <TableCell >{appointmentData.profession}</TableCell>
                <TableCell >{startDate}</TableCell>
                <TableCell >{moment(appointmentData.startDate).format('LT')} </TableCell>
                <TableCell >{moment(appointmentData.endDate).format('LT')}</TableCell>
                <TableCell>
                {(text === "Pending" || text === "Approved")?
                    <Button variant="contained" color="secondary" onClick={this.cancelAppointment}>
                        Cancel Appointment
                    </Button>
                    :text === "Completed"?    
                    <div>
                        <Button variant="contained" color="secondary" onClick={this.props.clientStore.openPayModal}>
                            Pay
                        </Button>
                            <Modal open={ this.props.clientStore.paymentModal}>
                                <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
                                    <Paper>
                                        <PayPal />    
                                    </Paper>
                                </Grid>
                            </Modal>
                    </div>                 

                     :null }
                    </TableCell>
            </TableRow>
        )
    }
}
export default CollapseRow