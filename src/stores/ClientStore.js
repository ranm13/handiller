import { observable, computed, action } from 'mobx'
const axios = require('axios')

export class ClientStore {

    @observable personalData
    @observable clientRequests

    @observable searchInput
    @observable chosenProfessional
    @observable searchResults

    // get client data by client id
    @action getPersonalData = async (id) => {
        // To Un-common:
        // this.personalData = await axios.get(`http://localhost:5000/client-details/:${id}`)
    }
    
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
        if (this.searchInput!=="") {
            this.chosenProfessional = this.searchInput
        }

        console.log(this.chosenProfessional)
        
    }
    
    // search professions by professionals and region
    @action searchPros = async () => {
        // To Un-common:
        // this.searchResults = await axios.get(`http://localhost:5000/searchProfs/${this.chosenProfessional}/${this.personalData.region}`)
        
        // To delete this after connecting with routes:
        this.searchResults = [
            // {profId, firstName, lastName, email, phone, password, address, city, region, profession, description},
            { profId: "1", firstName: "Itamar", lastName: "Bell", email: "itamar@gmail.com", phone: "0522343565", password: "blabla", address: "1 bla st.", city: "Herzelia", region: "Gush Dan", profession: "Stoner", description: "Such a big Stoner" },
            { profId: "2", firstName: "Ran", lastName: "Mar", email: "ran@gmail.com", phone: "0522676565", password: "blabla", address: "1 bla st.", city: "Ramat Gan", region: "Gush Dan", profession: "Biologist", description: "Such a big Biologist" },
            { profId: "3", firstName: "Idan", lastName: "Kandil", email: "idan@gmail.com", phone: "0588976565", password: "blabla", address: "1 bla st.", city: "Kiryat Gat", region: "Negev", profession: "Automation", description: "Such a big Automation" }
        ]
        
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