import { observable, action } from  'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable isProfessional = false
    @observable firstNameInput = ""
    @observable lastNameInput = "" 
    @observable emailInput = ""
    @observable phoneInput = ""
    @observable passwordInput = ""
    @observable addressInput = ""
    @observable cityInput = ""
    @observable areasInput = []
    @observable proffessionInput = ""
    @observable citiesList = []
    @observable areasList = []

    @action inputHandler = (name, value) => {
        this[name] = value
    } 

    @action getCities = async () => {
        let response = await axios.get('/cities')
        this.citiesList = response.data
    } 

    @action getRegions = async () => {
        let response = await axios.get('/regions')
        this.areasList = response.data
    } 

    @action signUp  =  () => {
        let userData = {
            isProfessional: this.isProfessional,
            firstName: this.firstNameInput,
            lastName: this.lastNameInput,
            email: this.emailInput,
            phone: this.phoneInput,
            password: this.passwordInput,
            address: this.addressInput,
            city: this.cityInput
        }

        // if(this.isProfessional){
        //     userData.areas = areasInput
        //     userData.proffession = proffessionInput
        // }

        axios.post('/signup', userData)
    } 
}   


