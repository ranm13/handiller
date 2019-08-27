import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

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

    render() {
        let professions = this.props.listOfProfessionsStore.professionals
        return (
            <div className="custom-input">
                <div>Pick A Profession: </div>
                <input list="search-input" name="profession" onChange={this.inputHandler} style={{width: "20vw"}} />
                <datalist id="search-input">
                    {professions.map(p => <option>{p}</option>)}
                </datalist>
                <IconButton onClick={this.selectProfession}>
                    <SearchIcon />
                </IconButton>

            </div>
        )

    }
}
export default CustomInput