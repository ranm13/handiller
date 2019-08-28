import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, TableCell } from '@material-ui/core'
import RowResults from './RowResults';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


@inject("clientStore")
@observer

class ResultsTable extends Component {

    render() {
        let searchResults = this.props.clientStore.searchResults
        let searchResultsHeaders = ["Name", "Email", "Phone", "Profession", "Description", ""]
        console.log(this.props.clientStore)
        return (
            <div>
                {searchResults ?
                    <Paper>
                        < Table >
                            <TableHead>
                                <TableRow>
                                    {searchResultsHeaders.map(h => <TableCell style={{fontSize: "1em"}}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {searchResults.map(r => <RowResults result={r} />)}
                            </TableBody>
                        </Table >
                    </Paper >
                    : null
                }
            </div>
        )
    }
}

export default ResultsTable