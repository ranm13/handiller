import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Modal, Grid, Paper, Button } from "@material-ui/core";

@inject( "professionalStore")
@observer
class CalendarComp extends Component { 
  async componentDidMount() {
    await this.props.professionalStore.getPersonalData(2)
    setTimeout(() => {
      const todayButton = document.querySelector('.rbc-btn-group').firstChild;
      todayButton.click()
    }, 100) 
  }

  onSelectEvent = (event) => {
    console.log(event)
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
                hi
                <Button onClick={professionalStore.handleModalOpening}>X</Button>
              </Paper>
            </Grid>
          </Grid>
        </Modal>
      </React.Fragment>

    );
  }
}

export default CalendarComp;

