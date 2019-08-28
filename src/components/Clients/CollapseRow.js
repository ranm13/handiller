import React, {Component} from 'react'
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Button  from '@material-ui/core/Button';

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
            <ListItem>
                <ListItemText primary={appointmentData.profName} />
                <ListItemText primary={appointmentData.profession} />
                <ListItemText primary={startDate} />
                <ListItemText primary={moment(appointmentData.startDate).format('LT')} />
                <ListItemText primary={moment(appointmentData.endDate).format('LT')} />
                {(text === "Pending" || text === "Approved")?
                    <Button variant="contained" color="secondary" onClick={this.cancelAppointment}>
                        Cancel Appointment
                    </Button>
                    : null }
            </ListItem>
        )
    }
}
export default CollapseRow