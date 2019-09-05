// import xButton from './img/xButton3.png'
import React, { Component } from 'react';
import Date from '../General/Date'
import { observer, inject } from 'mobx-react'
import { Modal, Grid, Typography, Button, Paper, IconButton, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
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
    let popUp = this.props.popUp
    let popUpStyle = {
      width: "20vw",
      backgroundColor: "rgb(255, 255, 255)",
      padding: "0 0 1em 1em",
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: "1em",
      border: "2px solid rgb(78, 77, 77)",
      boxShadow: "2px 2px rgb(37, 37, 37)",
      borderRadius: "6px",
      alignContent: "center",
      color: "rgb(19, 19, 19)"
    }

    let headerStyle = {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: "bold",
      margin: "1em 0"
    }

    return (
      <Modal open={popUp} >
        <Grid container justify="center" alignItems="center" style={{ height: "100vh" }} >
          <Paper style={popUpStyle} >
            <IconButton style={{ float: "right" }} onClick={this.props.handleClose} >
              <CancelIcon />
            </IconButton>
            <Typography style={headerStyle}>Appointment with {this.props.result.firstName}:</Typography>
            <Date handleDateChange={this.handleDateChange} />
            <Typography >
            <TextField label="What's wrong?" onChange={this.handleTitleChange} margin="normal" autoFocus={true} style={{ width: "240px"}}/>
          </Typography>
            <Grid container justify="center" alignItems="center" >
              <Button style={{float: "right", marginTop: "1em"}} variant="contained" color="primary" onClick={this.handleClick}>CONFIRM</Button>
            </Grid>
          </Paper>
        </Grid>
      </Modal>
    );
  }
}

export default ClientPopUp