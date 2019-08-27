import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputBase, Paper, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'; 

class DateAndTimePickers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "2019-08-28T10:30"
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
}
selectDate = () => {
  console.log(this.state.value)
}

  render() {
    return (
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Choose a comfortable date"
          type="datetime-local"
          onChange={this.handleChange}
          value={this.state.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <IconButton onClick={this.selectDate} >
                    <AddCircleIcon />
                </IconButton>
      </form>
    );
  }
}
export default DateAndTimePickers;




