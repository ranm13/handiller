import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


@inject("historyStore")

@observer
class History extends Component {
    render() {
        return (
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                List of stuff
              </ListSubheader>}>
            <ListItem button onClick={this.props.historyStore.handleClick}>
              <ListItemText primary="OutSide" />
              {this.props.historyStore.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.props.historyStore.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="Inside" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        )

    }
}
export default History

{/* <ListItemIcon>
<InboxIcon />
</ListItemIcon> */}