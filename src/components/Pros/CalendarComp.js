import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import ReactDOM from "react-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

@inject( "professionalStore")

@observer
class CalendarComp extends Component { 

  async componentDidMount() {
    await this.props.professionalStore.getPersonalData(2)
    const node = ReactDOM.findDOMNode(this);
 
    if (node instanceof HTMLElement) {
        const todayButton = node.querySelector('.rbc-btn-group').firstChild;
        console.log(node.querySelector('.rbc-btn-group'))
        document.querySelector('.rbc-btn-group').click()
    }
    console.log(Calendar)
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
          style={{ height: "88vh" }}/>
    );
  }
}

export default CalendarComp;

