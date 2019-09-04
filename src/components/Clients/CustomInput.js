import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { IconButton, Paper, Grid, Typography} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

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
        let professions = this.props.clientStore.professionals
        return (
            <Grid container style={{width: "100vw", margin: "1.5vh 0" }} justify="center" alignItems="center">
            <Paper style={{ width: "50vw" }} justify="center" alignItems="center">
                <Grid container style={{ height: "10vh" }} justify="center" alignItems="center">
                    <Grid item>
                        <Typography display="inline" variant="h6" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Pick a Profession: </Typography>
                        <input list="search-input" name="profession" onChange={this.inputHandler} style={{ width: "25vw", fontFamily: `'Montserrat', sans-serif`, paddingLeft: "5px" }} onKeyDown={this.selectProfessionEnter} />
                        <datalist id="search-input" >
                            {professions.map(p => <option>{p}</option>)}
                        </datalist>
                        <IconButton onClick={this.selectProfession} >
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        )

    }
}
export default CustomInput