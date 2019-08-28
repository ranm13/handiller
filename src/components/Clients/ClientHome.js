import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Requests from './Requests';
import CustomInput from './CustomInput';
import ResultsTable from './ResultsTable';


@observer
class Home extends Component {
    render() {
        return (  
                <div className="home">
                    <Requests />
                    <CustomInput />
                    <ResultsTable />     
                </div>        
        )
    }
}
export default Home