import xButton from './img/xButton3.png'
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Date from '../General/Date'
import { observer, inject } from 'mobx-react'
const moment = require('moment')

@inject('clientStore')
@observer
class ClientPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profId: "",
      appointmentStatus: "",
      clientId: "",
      title: ""
    }
  }

  componentDidMount = () => {
    let startDate = moment().format()
    this.setState({
      startDate,
      endDate: moment(startDate).add(2, "hours").format()
    })
  }

  handleClick = async () => {
    let profId = this.props.result.profId
    let appointmentStatus = "Pending"
    let clientId = this.props.clientStore.personalData.id
    await this.setState({ profId, appointmentStatus, clientId })
    this.handleClose()
    this.props.clientStore.createAppointment(this.state)
  }

  handleClose = async () => {
    await this.props.handleClose();
  }

  handleDateChange = async (startDate) => {
    startDate = moment(startDate).format()
    let endDate = moment(startDate).add(2, "hours").format()
    await this.setState({ startDate, endDate })
  }

  handleTitleChange = async (e) => {
    let title = e.target.value
    await this.setState({ title })
  }

  render() {

    return (
      <div className="pop-up">
        <div className="pop-up-header">Appointment with {this.props.result.firstName}:</div>
        <div className="pop-up-date"><Date handleDateChange={this.handleDateChange} /></div>
        <div className="pop-up-title"><input type="text" className="pop-up-title-input" name="lastname" placeholder="What's wrong..." onChange={this.handleTitleChange} /></div>
        <button className="pop-up-button" style={{backgroundColor:"#0b8e42"}} onClick={this.handleClick}>CONFIRM</button>
        <img className="pop-up-xButton" src={xButton} onClick={this.props.handleClose} />
      </div>
    );
  }
}

export default ClientPopUp