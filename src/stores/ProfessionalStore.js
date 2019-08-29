import { observable, computed,  action } from 'mobx'
import moment from "moment"
const axios = require('axios')

export class ProfessionalStore {
    @observable personalData
    @observable allRequests = []

    @computed get pendingRequests(){
        return this.allRequests.filter(a => a.appointmentStatus === "pending")
    }

    @computed get approvedRequsets(){
        return this.allRequests.filter(a => a.appointmentStatus === "approved")
    }
  

    @action getPersonalData = async (id) => {
        let response = await axios.get(`http://localhost:5000/prof/details/${id}`)
        this.personalData = response.data
        this.getRequests()
    }
    // change appointment request (CANCEL or APPROVE) sent by the client
    @action changeStatusRequest = async (appId, data) => {
        await axios.put(`http://localhost:5000/general/update-status/${appId}`, data)
        this.getRequests()
    }
    
    // get all requests by proffesional id
    @action getRequests = async () => {
        let response = await axios.get(`http://localhost:5000/general/appointments/${this.personalData.id}?isClient=false`)
        this.allRequests = response.data
        this.allRequests.forEach(a => {
            a.start = new Date(moment(a.startDate))
            a.end =  new Date(moment(a.endDate).add(2, "hours"))
        })
    }
    
    // update personal data (through settings)
    @action updatePersonalData = async (data) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/settings/${id}?isClient=false`, {data})
    }

}