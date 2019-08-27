import React, { Component } from 'react'
import { observer } from 'mobx-react'
import NavBar from '../General/NavBar';
import Requests from './Requests';
import SearchPros from './SearchPros';
import SearchResults from './SearchResults';


@observer
class ClientHomePage extends Component {
    render() {
        return (
            
           
                <div className="clientHomePage">
                    <NavBar />
                    <Requests />
                    <SearchPros />
                    {/* <SearchResults /> */}



                   
                </div>
        
        )

    }
}
export default ClientHomePage