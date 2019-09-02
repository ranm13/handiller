import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CollapseRow from './CollapseRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';



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
        let headers = ["Name", "Profession", "Date", "From", "To", ""]
        return (
            <div>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText 
                        primary={<Typography type="body2" style={{ color: '#0b8e42', fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}>{this.props.text}</Typography>}
                    />
                    {historyStore[this.props.toObserve] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={historyStore[this.props.toObserve]} timeout="auto" unmountOnExit>
                    <Table>
                        <TableHead component="div" disablePadding>
                            <TableRow>
                                {headers.map(h => <TableCell style={{fontSize: "1em"}}>{h}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody component="div" disablePadding>
                            {clientStore.clientRequests.length === 0 ? null
                                : clientStore.clientRequests
                                    .filter(i => i.appointmentStatus === text.toLowerCase())
                                    .map(i => <CollapseRow key={i.appointmentId} text={this.props.text} appointmentData={i} />)}
                        </TableBody>
                    </Table>
                </Collapse>
            </div>)
    }
}
export default CollapseItem