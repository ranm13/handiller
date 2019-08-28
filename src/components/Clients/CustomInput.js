import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import RowResults from './ResultsTable'
import ResultsTable from './ResultsTable'

@inject("clientStore")
@observer

class CustomInput extends Component {

    inputHandler = (e) => {
        this.props.clientStore.inputHandler(e.target.value)
    }

    selectProfession = () => {
        this.props.clientStore.selectProfession()
    }

    selectProfessionEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.clientStore.selectProfession()
        }
    }

    render() {
        this.props.clientStore.getProfessionalsList()
        let professions = this.props.clientStore.professionals
        return (
            <div className="custom-input">
                <spin>Pick A Profession: </spin>
                <input list="search-input" name="profession" onChange={this.inputHandler} style={{ width: "25vw", fontFamily: `'Montserrat', sans-serif`, paddingLeft: "5px" }} onKeyDown = {this.selectProfessionEnter}/>
                <datalist id="search-input" >
                    {professions.map(p => <option>{p}</option>)}
                </datalist>
                <IconButton onClick={this.selectProfession} >
                    <SearchIcon />
                </IconButton>
            </div>
        )

    }
}
export default CustomInput