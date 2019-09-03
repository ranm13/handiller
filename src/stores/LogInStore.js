import { observable, action } from  'mobx'
import axios from 'axios'

export class LogInStore {
    @observable email = ""
    @observable pass = ""

    @action inputHandler = (name, value) => this[name] = value

    @action login = async () => {
        if(this.validation()){
            const res = await axios.get(`http://localhost:5000/auth/login/${this.email}/${this.pass}`)
            if(res.data){
                //Move to to login with the right id
            }

        }
    }

    @action validation = () => {
        return true
    }

}   


