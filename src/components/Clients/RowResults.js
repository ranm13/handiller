import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ClientPopUp from './ClientPopUp'

@inject("clientStore")
@observer

class RowResults extends Component {
    constructor(){
        super()
        this.state = {
            popUp: false
        }
    }

    handleOpen = () => {
        this.setState({popUp: true})
    }

    handleClose = async () => {
        await this.setState({popUp: false})
    }

    render() {
        let result = this.props.result
        return (
            <TableRow key={result.profId}>
                    <TableCell>{result.firstName} {result.lastName}</TableCell>
                    <TableCell>{result.email}</TableCell>
                    <TableCell>{result.phone}</TableCell>
                    <TableCell>{result.region}</TableCell>
                    <TableCell>{result.profession}</TableCell>
                    <TableCell>{result.description}</TableCell>
                    <TableCell><Button variant="contained" color="primary" onClick={this.handleOpen}>SELECT</Button></TableCell>

                    {this.state.popUp ? <ClientPopUp result={this.props.result} handleClose={this.handleClose} popUp={this.state.popUp}/> : null}

                
            </TableRow>
        )

    }
}

export default RowResults