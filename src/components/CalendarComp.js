import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { observer, inject } from 'mobx-react'
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

@inject("profEventsStore")
class CalendarComp extends Component {

  popUp = (e) => <SimpleModal />
  // console.log(e.id)

  render() {

    let props = this.props.profEventsStore

    props.addEvent("ran the king ran the king ran the king ran the king", "2019-08-30T14:30")
    props.addEvent("Ran the boss", "2019-08-27T12:30")
    props.onClick()
    return (
      <div className="Calendar">

        <Calendar
          events={this.props.profEventsStore.events}
          onSelectEvent={this.popUp}
          defaultDate={new Date()}
          defaultView="week"
          step={60}
          localizer={localizer}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarComp;