import { observable, action } from 'mobx'

const axios = require('axios')

export class HistoryStore {
    @observable pendingOpen = false
    @observable approvedOpen = false
    @observable decliendOpen = false
    @observable completedOpen = false

    @action handleClick = (value) => {
        this[value] = !this[value]
    }
}