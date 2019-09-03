import { observable, action } from  'mobx'
import axios from 'axios'

export class LogInStore {

    @observable user = {
        email: "",
        pass: "",
        userId: 0,
        isProf: false,
        isLogin: false
    }

    @action inputHandler = (name, value) => this.user[name] = value

    @action login = async () => {

        if(this.validation()){
            const res = await axios.get(`http://localhost:5000/auth/login/${this.user.email}/${this.user.pass}`)
            const resUser = res.data;

            if(resUser.isValid){
                this.user.isProf = resUser.isProf === 1
                this.user.isLogin = true;
            }         
        }
    }

    @action logout = () =>{
        this.user = {
            email: "",
            pass: "",
            userId: 0,
            isProf: false,
            isLogin: false
        }
    }

    //TODO: Complete here the validation of the fields and Error handling in login function
    @action validation = () => {
        return true
    }

}   


