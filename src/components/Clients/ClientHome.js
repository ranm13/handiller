import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Requests from './Requests';
import CustomInput from './CustomInput';
import ResultsTable from './ResultsTable';

@inject("clientStore")
@observer
class ClientHome extends Component {

    componentDidMount = () => {
        this.props.clientStore.getProfessionalsList()
        this.props.clientStore.getPersonalData(1)
    }

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
export default ClientHome