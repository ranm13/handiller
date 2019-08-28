import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CollapseRow from './CollapseRow';

@inject("historyStore")

@observer

class CollapseItem extends Component {

    handleClick = () => {
        this.props.historyStore.handleClick(this.props.toObserve)
    }
    
    render() {
        let historyStore = this.props.historyStore
        return (
        <div>
            <ListItem button  onClick={this.handleClick}>
                <ListItemText primary={this.props.text} />
                    {historyStore[this.props.toObserve] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            <Collapse in={historyStore[this.props.toObserve]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  {[0, 1, 2 ,3].map(i => <CollapseRow key={i} text={this.props.text}/>)}
              </List>
            </Collapse>
        </div>)
    }
}
export default CollapseItem