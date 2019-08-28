import React, {Component} from 'react'
import { observer, inject } from 'mobx-react';
import { moment } from 'moment';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Button  from '@material-ui/core/Button';

@inject("clientStore")

@observer
class CollapseRow extends Component {
    cancelAppointment = () => {
        this.props.clientStore.cancelAppointment(this.props.appointmentData.id)
    }

    render() {
        let text = this.props.text
        // let appointmentData = this.props.appointmentData
        return (
            <ListItem>
                <ListItemText primary="name" />
                <ListItemText primary="profession" />
                <ListItemText primary="date" />
                <ListItemText primary="start_time" />
                <ListItemText primary="end_time" />
                {/* <ListItemText primary={appointmentData.profName} />
                <ListItemText primary={appointmentData.profession} />
                <ListItemText primary={moment(appointmentData.start).format('L')} />
                <ListItemText primary={moment(appointmentData.start).format('LT')} />
                <ListItemText primary={moment(appointmentData.end).format('LT')} /> */}
                {(text === "Pending" || text === "Approved")?
                    <Button variant="contained" color="secondary" /*onClick={this.cancelAppointment}*/>
                        Cancel Appointment
                    </Button>
                    : null }
            </ListItem>
        )
    }
}
export default CollapseRow