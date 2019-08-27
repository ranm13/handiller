import React, { Component } from 'react'
import { observer } from 'mobx-react'
import NavBar from '../General/NavBar';
import Requests from './Requests';
import CustomInput from './CustomerInput';


@observer
class ClientHomePage extends Component {
    render() {
        return (
           
                <div className="clientHomePage">
                    <NavBar />
                    <Requests />
                    <CustomInput />



                   
                </div>
        
        )

    }
}
export default ClientHomePage