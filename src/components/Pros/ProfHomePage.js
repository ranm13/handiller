import React, { Component } from 'react'
import Requests from './Requests'
import { observer } from 'mobx-react'
import CalendarComp from '../General/CalendarComp';
import { Grid } from '@material-ui/core'


@observer
class ProfHomePage extends Component {
    render() {
        return (
            <div>

                <Grid container spacing={1} >
                    <Grid item xs={9}  >  <CalendarComp /> </Grid>
                    <Grid item xs={3}> <Requests /> </Grid> </Grid>
            </div>)
    }
}
export default ProfHomePage