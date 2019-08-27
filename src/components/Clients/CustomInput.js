import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import RowResults from './ResultsTable'
import ResultsTable from './ResultsTable'

@inject("listOfProfessionsStore")
@inject("clientStore")
@observer

class CustomInput extends Component {

    inputHandler = (e) => {
        this.props.clientStore.inputHandler(e.target.value)
    }

    selectProfession = () => {
        this.props.clientStore.selectProfession()
        this.props.clientStore.searchPros()
    }

    selectProfessionEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.clientStore.selectProfession()
            this.props.clientStore.searchPros()
        }
    }

    render() {
        this.props.listOfProfessionsStore.getProfessionals()
        let professions = this.props.listOfProfessionsStore.professionals
        return (
            <div className="custom-input">
                <div>Pick A Profession: </div>
                <input list="search-input" name="profession" onChange={this.inputHandler} style={{ width: "20vw" }} onKeyDown = {this.selectProfessionEnter}/>
                <datalist id="search-input">
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