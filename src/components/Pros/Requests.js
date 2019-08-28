import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import RowRequests from './RowRequests'

@observer
class Requests extends Component {
    render() {
        let requests = [{ key: 1, description: "Herzillya", date: "2019-08-28 10:30" }, { key: 1, description: "Herzillya", date: "2019-08-28 10:30" }]
        return (
            <Grid container spacing={2} container direction="column" justify="flex-start" alignItems="center">
                {requests.map(i => <Grid item > <RowRequests key={i.key} description={i.description} date={i.date} /></Grid>)}</Grid>
        )
    }
}
export default Requests

// [0, 1, 2 ,3]

// text={this.props.text}