import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import { InputBase , Paper,  IconButton  } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'


@observer
class Input extends Component {
    // inputHandler = e => this.props.cityStore.handleInput(e.target.value)
    
    render() {
        return (
            <Paper>
                <InputBase onChange = {this.inputHandler}/>
            </Paper>
        )
    }
}
export default Input