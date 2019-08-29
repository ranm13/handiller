import { observable, action } from 'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable firstName
    @observable lastName
    @observable email
    @observable phoneNumber
    @observable address
    @observable password
    @observable city
    @observable isProfessional = false
    @observable proffession
    @observable citiesList = []
    @observable areasInput = []
    @observable areasList = []


    @action inputHandler = (name, value) => {
        this[name] = value
        console.log(name + " " + value)
    }
    @action inputHandler2 = () => {
        let SignupObject
        this.isProfessional ? SignupObject =
            {
                isProfessional: this.isProfessional,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                password: this.password,
                city: this.city,
                proffession: this.proffession
            } :
            SignupObject = {
                isProfessional: this.isProfessional,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                password: this.password,
                city: this.city,
                address: this.address
            }
        console.log(SignupObject)
    }
    @action radioHandler = (value) => {
        value === "Technician" ? this.isProfessional = true : this.isProfessional = false
        console.log("isProfessional" + ": " + this.isProfessional)
    }

    @action getCities = async () => {
        let response = await axios.get('/cities')
        this.citiesList = response.data
    }

    @action getRegions = async () => {
        let response = await axios.get('/regions')
        this.areasList = response.data
    }

    @action signUp = () => {
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



