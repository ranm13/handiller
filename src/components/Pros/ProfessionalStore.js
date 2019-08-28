import { observable, computed, action } from 'mobx'
import { inject } from 'mobx-react';
const axios = require('axios')

export class ProfessionalStore {

    @observable personalData = { profId: "1", firstName: "Itamar", lastName: "Bell", email: "itamar@gmail.com", phone: "0522343565", password: "blabla", address: "1 bla st.", city: "Herzelia", region: "Gush Dan", profession: "Stoner", description: "Such a big Stoner" }
    
    @observable pendingRequests
    @observable allRequests

    // change appointment request (CANCEL or APPROVE) sent by the client
        @action changeStatusRequest = async (appId, status) => {
        // To Un-common: **** check syntax for status ***
        // this.personalData = await axios.put(`http://localhost:5000/update-status/${appId}`, {status: approved})
    }
    
    // get all requests by proffesional id
    @action getRequests = async () => {
        // To Un-common:
        // this.allRequests = await axios.get(`http://localhost:5000/appointment/:${this.personalData.id}?isClient=false`)
    }
    
    // update personal data (through settings)
    @action updatePersonalData = async (data) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/settings/${id}?isClient=false`, {data})
    }

}