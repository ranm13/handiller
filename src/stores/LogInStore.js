import { observable, action } from  'mobx'

export class LogInStore {
    @observable emailInput = ""
    @observable passwordInput = ""

    @action inputHandler = (name, value) => {
        this[name] = value
    } 
}   


