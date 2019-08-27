import { observable, computed, action } from 'mobx'
const axios = require('axios')

export class ListOfProfessionsStore {
    @observable professionals = ["Air Conditioner Technician", "Audio and Video Equipment Technician", "Bicycle Repairer", "Boiler Technician", "Cable Technician", "Coffee Machine Repairer", "Computer Technician", "Dishwasher Repairer", "Dryer Technician", "Electrician", "Elevator Repairer", "General Technician", "Guitar Technician", "House Cleaner", "Housekeeping Cleaner", "Lighting Technician", "Microwave Repairer", "Motorcycle Technician", "Painter", "Piano Technician", "Plumber", "Printer Technician", "Refrigerator Installer", "Refrigerator Technician", "Safe Repairer", "Scooter Technician", "Stove Repairer", "Television Technician", "Water Services Technician", "Washing Machine Repairer"]
    
    @action getProfessionals = async () => {
        // this.professionals = axios.get('http://localhost:5000/professionals')
    }
}