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
        selectedDate: null
    }

  }
  
  handleClick = async (event) => {
    // await this.setState({anchorEL: event.currentTarget});
  }

  handleClose = async () => {
    await this.props.handleClose();
  }

  handleDateChange = async (selectedDate) => {
      selectedDate = moment(selectedDate).format()
        await this.setState({selectedDate})
        console.log(this.state.selectedDate)
  }  
  
  render() {
    
    // const open = Boolean(this.state.anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    
    return (
      <div style={{ width: "400px" }}>
        <Popover
          open={this.props.popUp}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'center',
          // }}
        >
          <Typography>Set an appointment with {this.props.result.firstName}:</Typography>
          <Typography><Date handleDateChange={this.handleDateChange} /></Typography>

          <TextField
            id="outlined-full-width"
            label="Description"
            style={{ margin: 8 }}
            placeholder="Describe the problem"
            // helperText="Full width!"
            // fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button variant="contained" color="primary" onClick={this.handleClick}>Confirm</Button>
        </Popover>
      </div>
    );
  }
}

export default ClientPopUp