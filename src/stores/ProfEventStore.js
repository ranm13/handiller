import { observable, action } from  'mobx'
import moment from "moment";
// import axios from 'axios'

export class ProfEventStore {
    @observable start
    @observable end
    @observable title
    @observable id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10) //giving a random short string ID
    @observable status = "panding" 
    constructor(title, start, end) {
        this.title = title
        this.start = start
        this.end = end
    } 
}   
    // start: new Date(moment("Wed Aug 21 2019 13:35:16 GMT+0300" )),
    // end: new Date(moment(moment().add(5, "hours"))),
    // title: "OUR STUFF"
  