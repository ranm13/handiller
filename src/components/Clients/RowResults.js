import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TableCell from '@material-ui/core/TableCell'

@inject("clientStore")
@observer

class SearchResults extends Component {

    render() {
        let result = this.props.result
        return (
            <List>
                <ListItem key={result.profId}>
                <TableCell>Name: {result.firstName} {result.lastName}</TableCell>
                <TableCell>Email: {result.email}</TableCell>
                <TableCell>Phone: {result.phone}</TableCell>
                <TableCell>Region: {result.region}</TableCell>
                <TableCell>Profession: {result.profession}</TableCell>
                <TableCell>Description: {result.description}</TableCell>
                
                </ListItem>
            </List>
        )

    }
}

export default SearchResults