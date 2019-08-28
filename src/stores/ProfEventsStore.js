import { observable, action } from 'mobx'
import moment from "moment";
import { ProfEventStore } from './ProfEventStore'
// import axios from 'axios'

export class ProfEventsStore {
    @observable events = []

    @action addEvent = (title, start) => {
        start = new Date(moment(start))
        let end = new Date(moment(start).add(2, "hours"))
        this.events.push(new ProfEventStore(title, start, end))
    }

    @action onClick = () => {
        console.log("fuck off");
        // console.log(end);
      };

    // תוסיף תערוך תמחוק
}

