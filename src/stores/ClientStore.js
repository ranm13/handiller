import { observable, computed, action } from 'mobx'
const axios = require('axios')

export class ClientStore {

    @observable professionals = ["Air Conditioner Technician", "Audio and Video Equipment Technician", "Bicycle Repairer", "Boiler Technician", "Cable Technician", "Coffee Machine Repairer", "Computer Technician", "Dishwasher Repairer", "Dryer Technician", "Electrician", "Elevator Repairer", "General Technician", "Guitar Technician", "House Cleaner", "Housekeeping Cleaner", "Lighting Technician", "Microwave Repairer", "Motorcycle Technician", "Painter", "Piano Technician", "Plumber", "Printer Technician", "Refrigerator Installer", "Refrigerator Technician", "Safe Repairer", "Scooter Technician", "Stove Repairer", "Television Technician", "Water Services Technician", "Washing Machine Repairer"]
    
    @observable personalData = { clientId: "1", firstName: "Eitan", lastName: "Aharon", email: "eitan@gmail.com", phone: "0588966565", password: "blibli", address: "1 bli st.", city: "Tel Aviv", region: "Gush Dan"}
    
    @observable clientRequests
    
    @observable searchInput
    @observable chosenProfessional
    @observable searchResults
    
    // get list of professionals 
    @action getProfessionalsList = async () => {
        // this.professionals = axios.get('http://localhost:5000/professionals')
    }

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
        if (this.professionals.find(p => p==this.searchInput)) {
            this.chosenProfessional = this.searchInput
            this.searchPros()
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
            { profId: "2", firstName: "Idan", lastName: "Kandil", email: "idan@gmail.com", phone: "0588976565", password: "blabla", address: "1 bla st.", city: "Kiryat Gat", region: "Negev", profession: "Automation", description: "Such a big Automation" },
            { profId: "3", firstName: "Ran", lastName: "Mar", email: "ran@gmail.com", phone: "0522676565", password: "blabla", address: "1 bla st.", city: "Ramat Gan", region: "Gush Dan", profession: "Biologist", description: "Such a big Biologist" },
            { profId: "4", firstName: "Moshe", lastName: "Cohen", email: "moshe@gmail.com", phone: "0528743565", password: "blabla", address: "1 bla st.", city: "Eilat", region: "South", profession: "Computer Technician", description: "I'll fix anything" },
            { profId: "5", firstName: "Avi", lastName: "David", email: "avi@gmail.com", phone: "0522676556", password: "blabla", address: "1 bla st.", city: "Haifa", region: "North", profession: "Scooter Technician", description: "I like the sky" },
            { profId: "6", firstName: "Ofer", lastName: "Ron", email: "ofer@gmail.com", phone: "0588931565", password: "blabla", address: "1 bla st.", city: "Tel Aviv", region: "Gush Dan", profession: "Piano Repairer", description: "I'm very good" }
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