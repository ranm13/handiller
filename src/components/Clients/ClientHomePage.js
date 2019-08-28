import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ClientNavBar from './ClientNavBar';


@observer
class ClientHomePage extends Component {
    render() {
        return ( 
                <div className="clientHomePage">
                    <ClientNavBar />          
                </div>     
        )
    }
}
export default ClientHomePage