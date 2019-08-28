import { observable, action } from 'mobx'
import moment from "moment"
const axios = require('axios')

export class ProfessionalStore {
    @observable personalData
    @observable pendingRequests = []
    @observable allRequests = []

    @action getPersonalData = async (id) => {
        let response = await axios.get(`http://localhost:5000/prof/details/${id}`)
        this.personalData = response.data
        this.getRequests(id)
    }
    // change appointment request (CANCEL or APPROVE) sent by the client
    @action changeStatusRequest = async (appId, status) => {
        // To Un-common: **** check syntax for status ***
        // this.personalData = await axios.put(`http://localhost:5000/update-status/${appId}`, {status: approved})
    }
    
    // get all requests by proffesional id
    @action getRequests = async (id) => {
        let response = await axios.get(`http://localhost:5000/general/appointments/${id}?isClient=false`)
        this.allRequests = response.data
        this.allRequests.forEach(a => {
            a.start = new Date(moment(a.startDate))
            a.end =  new Date(moment(a.endDate).add(2, "hours"))
        })
        console.log(this.allRequests)
    }
    
    // update personal data (through settings)
    @action updatePersonalData = async (data) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/settings/${id}?isClient=false`, {data})
    }

}