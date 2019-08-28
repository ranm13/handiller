import React, { Component } from 'react'
import Requests from './Requests'
import { observer } from 'mobx-react'
import CalendarComp from '../CalendarComp';


@observer
class ProfHomePage extends Component {
    render() {
        return (
            <div>
                {/* <CalendarComp /> */}
                {/* <Requests /> */}
            </div>)
    }
}
export default ProfHomePage