import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Modal, Grid, Paper } from "@material-ui/core";
import CalendarModal from './CalendarModal';

@inject( "professionalStore")

@observer
class CalendarComp extends Component { 
   componentDidMount() {
    setTimeout(() => {
      const todayButton = document.querySelector('.rbc-btn-group').firstChild;
      todayButton.click()
    }, 500) 
  }

  onSelectEvent = (event) => {
    this.props.professionalStore.event = event
    this.props.professionalStore.handleModalOpening()
  }

  render() {
    const localizer = momentLocalizer(moment);
    const professionalStore = this.props.professionalStore
    return (
      <React.Fragment>
        <Calendar
          defaultDate={new Date()} 
          events={professionalStore.approvedRequsets}
          localizer={localizer}
          defaultView="month"
          resizable
          onSelectEvent = {this.onSelectEvent}
          style={{ height: "80vh" }}/>
        <Modal open={professionalStore.isModalOpen}>
          <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
            <Grid item>
              <Paper  style={{ width: 400}}>
                  <CalendarModal event={this.props.professionalStore.event}/>
              </Paper>
            </Grid>
          </Grid>
        </Modal>
      </React.Fragment>

    );
  }
}

export default CalendarComp;

