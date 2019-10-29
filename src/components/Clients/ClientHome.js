import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Requests from './Requests';
import CustomInput from './CustomInput';
import ResultsTable from './ResultsTable';
import { Grid } from "@material-ui/core";

@inject("clientStore" ,'logInStore')

@observer
class ClientHome extends Component {

    componentDidMount = () => {
        this.props.clientStore.getProfessionalsList()
        this.props.clientStore.getPersonalData(this.props.logInStore.userId)
    }

    render() {
        let clientHomeStyle = {
            height: "100vh", 
            margin: "0.3vh 0", 
            padding: "2vh 1vw 1vh 1vw",
            width: "98%",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundAttachment: "fixed",
            backgroundImage: `url('https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`
        }
        return (
            <Grid className="home" style={clientHomeStyle}>
                <Requests />
                <CustomInput />
                <ResultsTable />
            </Grid>
        )
    }
}
export default ClientHome