import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Paper, Grid, Button, Typography } from '@material-ui/core'

@observer
class RowRequests extends Component {
    render() {
        return (
            <div>
                <Paper key={this.props.key}>
                    <Typography variant="h6">{this.props.description}</Typography>
                    <Typography variant="h6">{this.props.date}</Typography>
                    <Button variant="contained" color="secondary" onClick={this.handleOpen}>DECLINE</Button>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>APPROVE</Button>
                </Paper>
            </div>)
    }
}
export default RowRequests