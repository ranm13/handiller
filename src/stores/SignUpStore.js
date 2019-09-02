import { observable, action } from 'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable userData = {}
    @observable proffession
    @observable citiesList = []
    @observable areasList = []

 
    @action getCities = async () => {
        const response = await axios.get('http://localhost:5000/general/cities')
        this.citiesList = response.data
    }

    @action getRegions = async () => {
        let response = await axios.get('/regions')
        this.areasList = response.data
    }

}



