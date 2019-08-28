import React, { Component } from 'react'
import { observer } from 'mobx-react'
import NavBar from './Client-NavBar';


@observer
class ClientHomePage extends Component {
    render() {
        return ( 
                <div className="clientHomePage">
                    <NavBar />          
                </div>     
        )
    }
}
export default ClientHomePage