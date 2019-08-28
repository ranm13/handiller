import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Date from '../General/Date'
import { observer, inject } from 'mobx-react'
const moment = require('moment')

@inject('clientStore')
@observer
class ClientPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {

    

    }

  }
  
  handleClick = async () => {
    let profId = this.props.result.profId
    let appointmentStatus = "Pending"
    let clientId = this.props.clientStore.personalData.id
    await this.setState({profId, appointmentStatus, clientId})
    this.handleClose()
    this.props.clientStore.createAppointment(this.state)
    console.log(this.state)
  }

  handleClose = async () => {
    await this.props.handleClose();
  }

  handleDateChange = async (startDate) => {
      startDate = moment(startDate).format()
      let endDate = moment(startDate).add(2, "hours").format()
        await this.setState({startDate, endDate})
  }  

  handleTitleChange = async (e) => {
    let title = e.target.value
    await this.setState({title})
    console.log()
  }
  
  render() {
    
    console.log(this.props.result)
    return (
      <div className="pop-up">
        <div className="pop-up-header">Set an appointment with {this.props.result.firstName}:</div>
          <div className="pop-up-date"><Date handleDateChange={this.handleDateChange} /></div>
          <div className="pop-up-title"><input type="text" className="pop-up-title-input" name="lastname" placeholder="Write what's wrong..." onChange={this.handleTitleChange}/></div>

          <Button onClick={this.handleClick}>Confirm</Button>
        </div>
    );
  }
}

export default ClientPopUp