import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

@inject( "professionalStore")

@observer
class CalendarComp extends Component { 

  async componentDidMount() {
    // this.props.profEventsStore.getAppointments(2)
    await this.props.professionalStore.getPersonalData(2)
  }

  render() {
    const localizer = momentLocalizer(moment);
    return (
      <div className="Calendar">
        <Calendar
          events={this.props.professionalStore.allRequests}
          onSelectEvent={this.popUp}
          defaultDate={new Date()}
          defaultView="month"
          step={60}
          localizer={localizer}
          style={{ height: "88vh" }}/>
      </div>
    );
  }
}

export default CalendarComp;