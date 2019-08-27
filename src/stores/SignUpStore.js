import { observable, action } from  'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable isProfessional
    @observable firstNameInput
    @observable lastNameInput
    @observable emailInput
    @observable phoneInput
    @observable passwordInput
    @observable addressInput
    @observable cityInput
    @observable areasInput
    @observable proffessionInput
    @observable citiesList = []
    @observable areasList = []

    @action inputHandler = (name, value) => {
        this[name] = value
    } 


    @action getCitiesAndAreas

    @action
}   


