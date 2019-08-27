import { observable, computed, action } from  'mobx'
// import {CustomerInput} from '../components/Clients/CustomerInput'


export class ListOfProfessionsStore {
    @observable professions = ["Air Conditioner Technician", "Audio and Video Equipment Technician","Bicycle Repairer", "Boiler Technician", "Cable Technician", "Coffee Machine Repairer", "Computer Technician","Dishwasher Repairer", "Dryer Technician", "Electrician", "Elevator Repairer", "General Technician", "Guitar Technician","House Cleaner", "Housekeeping Cleaner", "Lighting Technician", "Microwave Repairer", "Motorcycle Technician", "Painter", "Piano Technician", "Plumber", "Printer Technician", "Refrigerator Installer", "Refrigerator Technician", "Safe Repairer", "Scooter Technician", "Stove Repairer", "Television Technician", "Water Services Technician", "Washing Machine Repairer"]
    @observable name
    @observable input
    @observable chosenCategory
    @action handleInput = (value) => {
        this.input = value
    } 
    @action selectCategory = () => {
        this.chosenCategory = this.input
        console.log(this.chosenCategory)
    }
    
}