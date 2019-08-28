import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

class CollapseRow extends Component {
    render() {
        let text = this.props.text
        return (
            <ListItem>
                <ListItemText primary="name" />
                <ListItemText primary="profession" />
                <ListItemText primary="date" />
                <ListItemText primary="time" />
                {(text === "Pending" || text === "Approved")?  <DeleteIcon /> : null }
            </ListItem>
        )
    }
}
export default CollapseRow