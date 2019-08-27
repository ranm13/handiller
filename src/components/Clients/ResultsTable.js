import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Paper } from '@material-ui/core'
import RowResults from './RowResults';


@inject("clientStore")
@observer

class ResultsTable extends Component {

    render() {
        let searchResults = this.props.clientStore.searchResults
        console.log(this.props.clientStore)
        return (
            <Paper>
                <div className="row-results">
                    {searchResults ? searchResults.map(r => <RowResults result={r} />) : null}
                </div>
            </Paper>
        )
    }
}

export default ResultsTable