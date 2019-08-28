import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ProfNavBar from './ProfNavBar';

@observer
class ProfHome extends Component {


    render() {
        return ( 
                <div className="ProfHome">
                    <ProfNavBar />          
                </div>     
        )
    }
}
export default ProfHome