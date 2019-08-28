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
        // this.props.clientStore.cancelAppointment(this.props.appointmentData.id)
    }

    render() {
        let text = this.props.text
        let appointmentData = this.props.appointmentData;
        console.log(appointmentData)
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