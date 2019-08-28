import { observable, action } from  'mobx'
import moment from "moment";
import {ProfEventStore} from './ProfEventStore'
// import axios from 'axios'

export class ProfEventsStore {
    @observable events = [
        // {
        //   start: new Date(moment("2019-08-14T12:30" )),
        //   end: new Date(moment(moment("2019-08-14T12:30").add(5, "hours"))),
        //   title: "OUR STUFF"
        // },
        // {
        //     start: new Date(),
        //     end: new Date(moment().add(0, "days")),
        //     title: "Some title"
        // }
    ]
    @action addEvent = (title, start) => {
        start = new Date(moment(start))
       let end = new Date(moment(start).add(2, "hours"))
        this.events.push(new ProfEventStore(title, start, end))
    }

    
    
    

    //   onEventResize = (type, { event, start, end, allDay }) => {
    //     this.setState(state => {
    //       state.events[0].start = start;
    //       state.events[0].end = end;
    //       return { events: state.events };
    //     });
    //   };
    
    //   onEventDrop = ({ event, start, end, allDay }) => {
    //     console.log(start);
    //     console.log(end);
    //   };

    
    // @observable id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10) 
    // @observable panding = true
    // @observable completed = false

    // תוסיף תערוך תמחוק
}   

