import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ProfNavBar from './ProfNavBar';

@observer
class ProfHomePage extends Component {


    render() {
        return ( 
                <div>
                    <ProfNavBar />          
                </div>     
        )
    }
}
export default ProfHomePage