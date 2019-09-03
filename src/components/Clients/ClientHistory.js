import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import List from '@material-ui/core/List';
import CollapseItem from './CollapseItem';
import { Paper, Grid } from '@material-ui/core'


@inject("clientStore")
@observer
class History extends Component {

    componentDidMount = () => {
        this.props.clientStore.getRequests()
    }

    render() {
        let clientHistoryStyle = {
            padding: "8vh 1vw 1vh 1vw",
            width: "98%",
            height: "91.5vh",
            margin: "auto",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            backgroundImage: `url('https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')`
        }
        return (
            <Grid style={clientHistoryStyle} >
                <Paper style={{backgroundColor: "#fffbfbd3"}} >
                    <List component="nav" >
                        <CollapseItem text="Pending" toObserve="pendingOpen" />
                        <CollapseItem text="Approved" toObserve="approvedOpen" />
                        <CollapseItem text="Declined" toObserve="decliendOpen" />
                        <CollapseItem text="Completed" toObserve="completedOpen" />
                    </List>
                </Paper>
            </Grid>
        )

    }
}
export default History