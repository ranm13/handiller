import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CollapseRow from './CollapseRow';

@inject("historyStore", "clientStore")
@observer
class CollapseItem extends Component {

    handleClick = () => {
        this.props.historyStore.handleClick(this.props.toObserve)
    }
    
    render() {
        let historyStore = this.props.historyStore
        let clientStore = this.props.clientStore
        let text = this.props.text
        return (
        <div>
            <ListItem button  onClick={this.handleClick}>
                <ListItemText primary={this.props.text} />
                    {historyStore[this.props.toObserve] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            <Collapse in={historyStore[this.props.toObserve]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {clientStore.clientRequests.length === 0 ? null 
                                        : clientStore.clientRequests
                                            .filter(i => i.appointmentStatus === text.toLowerCase())
                                            .map(i => <CollapseRow key={i.appointmentId} text={this.props.text} appointmentData={i} />)}
                </List>
            </Collapse>
        </div>)
    }
}
export default CollapseItem