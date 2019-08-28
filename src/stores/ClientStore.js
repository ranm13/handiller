import { observable, computed, action } from 'mobx'
const axios = require('axios')

export class ClientStore {

    @observable professionals = []
    @observable personalData = {}
    @observable profPersonalData = {}
    @observable clientRequests = [];
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
    
    @action getRequests = async () => {
        const res = await axios.get(`http://localhost:5000/general/appointments/${this.personalData.id}?isClient=true`);
        this.clientRequests = [...res.data]
    }
    
    
    @action inputHandler = (value) => {
        this.searchInput = value
    }

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
    
    @action createAppointment = async (appointment) => {
        axios.post(`http://localhost:5000/general/appointment`, appointment)
    }
    
    @action cancelAppointment = async (id) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/update-status/${id}`, {status: "decline"})
    }
    
    @action updatePersonalData = async (data) => {
        // To Un-common:
        // await axios.put(`http://localhost:5000/settings/${id}?isClient=true`, {data})
    }

}