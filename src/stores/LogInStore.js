import { observable, action } from  'mobx'

export class LogInStore {
    @observable emailInput = ""
    @observable passwordInput = ""
    @observable isClient = false
    @observable isProf = false

    @action inputHandler = (name, value) => {
        this[name] = value
    } 

    @action enterToClient = () => {
        this.isClient = true
    }

    @action enterToProf = () => {
        this.isProf = true
    }
}   


