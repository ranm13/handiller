import { observable, action } from 'mobx'
const axios = require('axios')

export class HistoryStore {
    @observable open = false

    @action handleClick = () => {
        this.open = !this.open
    }
}