import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

@inject("listOfProfessionsStore")
@observer
class CustomInput extends Component {

    inputHandler = (e) => {
        this.props.listOfProfessionsStore.handleInput(e.target.value)
    }

    selectCategory = () => {
        this.props.listOfProfessionsStore.selectCategory()
    }

    render() {
        let professions = this.props.listOfProfessionsStore.professions
        return (
            <div className="custom-input">
                <div>Pick A Category: </div>
                <input list="search-input" name="category" onChange={this.inputHandler} style={{width: "20vw"}} />
                <datalist id="search-input">
                    {professions.map(p => <option>{p}</option>)}
                </datalist>
                <IconButton onClick={this.selectCategory}>
                    <SearchIcon />
                </IconButton>

            </div>
        )

    }
}
export default CustomInput