import React, {Component} from 'react'
import { Grid, Button, Typography } from "@material-ui/core";
import {  observer, inject } from 'mobx-react';
import moment from "moment";
import GoogleMapFrame from './GoogleMapFrame';

@inject('professionalStore')

@observer
class CalendarModal extends Component {

    render() {
        let event =this.props.event
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item >
                    <Button onClick={this.props.professionalStore.handleModalOpening} style={{color: "red"}}>X</Button>
                    <Typography  variant="h5">{event.clientName}</Typography>
                </Grid>
                <Grid item >
                    <Typography>{event.title}</Typography>
                </Grid>
                <Grid item >
                     <Typography>{event.clientAddress}, {event.clientCity}</Typography>
                </Grid>
                <Grid item >
                    <Typography>{moment(event.startDate).format('L')}</Typography>
                </Grid>
                <Grid item >
                      <Typography>{moment(event.startDate).format('LT')}-{moment(event.endDate).format('LT')}</Typography>
                </Grid>
                <GoogleMapFrame adress={event.clientAddress + " " + event.clientCity} />
            </Grid>
        )
    }
}
export default CalendarModal