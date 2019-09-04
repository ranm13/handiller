import { observable, action } from 'mobx'
import axios from 'axios'

export class SignUpStore {
    @observable userData = {}
    @observable isProf = false;
    @observable regions = {};
    @observable proffessionsList = [];
    @observable citiesList = []
    @observable areasList = []

    @action inputHandler = (name, value) => this.userData[name] = value

    @action setProffesional = isChecked => this.isProf = isChecked

    @action changeArea = (name, isChecked, regNum) => { 
        const regId = Number(regNum)
        this.regions[name] = {isChecked, regId}
    }

    getRegionArr = () => {
        const profRegion = [];
        for (let region in this.regions)
            if (this.regions[region].isChecked)
                profRegion.push(this.regions[region].regId)
            
        return profRegion
    }

    @action signup = () => {
        if (this.validation()) {
            if (this.isProf) {
                const profRegion = this.getRegionArr();
                this.userData.regions = profRegion;
                axios.post('http://localhost:5000/prof/signup', this.userData)
            }
            else
                axios.post('http://localhost:5000/client/signup', this.userData)
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

    @action getProffessions = async () => {
        let response = await axios.get('http://localhost:5000/general/professionals')
        this.proffessionsList = response.data
    }

}



