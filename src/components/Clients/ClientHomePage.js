import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ClientNavBar from './ClientNavBar';

@inject("clientStore")
@observer
class ClientHomePage extends Component {

    componentDidMount = () => {
        this.props.clientStore.getProfessionalsList()
        this.props.clientStore.getPersonalData(1)
    }

    render() {
        return ( 
                <div className="clientHomePage">
                    <ClientNavBar />          
                </div>     
        )
    }
}
export default ClientHomePage