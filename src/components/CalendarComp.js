import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
@inject("profEventsStore")
class CalendarComp extends Component {
  
  render() {
    this.props.profEventsStore.addEvent("ran the king","2019-08-30T12:30" ) 
    return (
      <div className="Calendar">
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.props.profEventsStore.events}
          localizer={localizer}
          // onEventDrop={this.onEventDrop}
          // onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarComp;