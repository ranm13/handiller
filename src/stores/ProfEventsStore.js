import { observable, action } from 'mobx'
import moment from "moment";
import axios from 'axios'

export class ProfEventsStore {
    @observable appointments = []

    @action getAppointments = async (id) => {
        let response = await axios.get(`http://localhost:5000/general/appointments/${id}?isClient=false`)
        this.appointments = response.data.filter(a => a.status === "approved")
        this.appointments.forEach(a => {
            a.start = new Date(moment(a.startDate))
            a.end =  new Date(moment(a.endDate).add(2, "hours"))
        })
        console.log(this.appointments)
    }

    @action onClick = () => {
        // console.log("fuck off");
        // console.log(end);
      };
}

