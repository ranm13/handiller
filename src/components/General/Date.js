import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
const moment = require('moment')

class Date extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // value: "2019-08-28T10:30"
      value: moment().format("YYYY-MM-DDTHH:MM")
    }
  }

  handleDateChange = async (e) => {
    await this.setState({
      value: e.target.value
      
    })
    // await this.props.handleDateChange(e.target.value)
    this.props.handleDateChange(this.state.value)

  }

  render() {
    return (
      <form noValidate>
        <TextField
          id="datetime-local"
          // label="Choose a comfortable date"
          type="datetime-local"
          onChange={this.handleDateChange}
          value={this.state.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <IconButton onClick={this.selectDate} >
          <AddCircleIcon />
        </IconButton> */}
      </form>
    );
  }
}
export default Date;




