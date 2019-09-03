import { observable, action } from 'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable userData = {}
    @observable proffession
    @observable citiesList = []
    @observable areasList = []

    @action inputHandler = (name, value) => this.userData[name] = value

    @action signup = () => {
        if(this.validation()){
            axios.post('http://localhost:5000/client/signup',this.userData)
        }
    }

    @action validation = () => {
        return true
    }

    @action getCities = async () => {
        const response = await axios.get('http://localhost:5000/general/cities')
        this.citiesList = response.data
    }

    @action getRegions = async () => {
        let response = await axios.get('http://localhost:5000/general/regions')
        this.areasList = response.data
    }

}



