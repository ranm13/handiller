import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

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

  render() {
    const localizer = momentLocalizer(moment);
    return (
          <Calendar
          defaultDate={new Date()} 
          events={this.props.professionalStore.approvedRequsets}
          localizer={localizer}
          defaultView="month"
          resizable
          // style={{ height: "80vh" }}/>
          style={{ height: "78vh" }}/>
    );
  }
}

export default CalendarComp;

