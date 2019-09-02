import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import List from '@material-ui/core/List';
import CollapseItem from './CollapseItem';
import { Paper, TableCell } from '@material-ui/core'


@inject("clientStore")
@observer
class History extends Component {

    componentDidMount = () => {
        this.props.clientStore.getRequests()
    }

    render() {
        return (
            <Paper style={{width: "98%", margin: "auto"}}>
                <List component="nav" >
                    <CollapseItem text="Pending" toObserve="pendingOpen" />
                    <CollapseItem text="Approved" toObserve="approvedOpen" />
                    <CollapseItem text="Declined" toObserve="decliendOpen" />
                    <CollapseItem text="Completed" toObserve="completedOpen" />
                </List>
            </Paper>
        )

    }
}
export default History