import { observable, computed, action } from 'mobx'
const axios = require('axios')

export class ClientStore {

    @observable professionals = []
    @observable personalData = {}
    @observable profPersonalData = {}
    @observable clientRequests
    @observable searchInput
    @observable chosenProfessional
    @observable searchResults
    
    @action getProfessionalsList = async () => {
        const res = await axios.get('http://localhost:5000/general/professionals')
        this.professionals = [...res.data]
    }

    @action getPersonalData = async (id) => {
        const res = await axios.get(`http://localhost:5000/client/details/${id}`)
        this.personalData = res.data;
    }
    
    // @action getProfPersonalData = async (id) => {
    //     this.profPersonalData = this.searchResults.find(p => p.profId === id)
    // }

    // get clients requests by client id
    @action getRequests = async () => {
        // To Un-common:
        // this.clientRequests = await axios.get(`http://localhost:5000/appointment/:${this.personalData.id}?isClient=true`)
    }
    
    
    // Input Handler
    @action inputHandler = (value) => {
        this.searchInput = value
    }

    // chose the required professional
    @action selectProfession = () => {
        if (this.professionals.find(p => p==this.searchInput)) {
            this.chosenProfessional = this.searchInput
            this.searchPros()
        }
    }
    
    @action searchPros = async () => {
        const res = await axios.get(`http://localhost:5000/client/searchProfs/${this.chosenProfessional}/${this.personalData.region}`)
        this.searchResults = [...res.data]     
    }
    
    // create appoinment
    @action requestAppointments = async (appData) => {
        // To Un-common:
        // await axios.post(`http://localhost:5000/appointment`, {...appData})
    }
    
    // cancel appointment
    @action cancelAppointment = async (id) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/update-status/${id}`, {status: "decline"})
    }
    
    // update personal data (through settings)
    @action updatePersonalData = async (data) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/settings/${id}?isClient=true`, {data})
    }

}