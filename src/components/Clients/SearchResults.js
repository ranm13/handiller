// import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'
// import { Paper } from '@material-ui/core'
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// @inject("listOfProfessionsStore")
// @observer
// class CustomInput extends Component {

//     render() {
//         let chosenProfession = this.props.listOfProfessionsStore.chosenProfession
//         let profession = this.props.listOfProfessionsStore.profession
//         return (
//             <div className="custom-input">
//                 <div>Pick A Profession: </div>
//                 <input list="search-input" name="profession" onChange={this.inputHandler} style={{width: "20vw"}} />
//                 <datalist id="search-input">
//                     {professions.map(p => <option>{p}</option>)}
//                 </datalist>
//                 <IconButton onClick={this.selectProfession}>
//                     <SearchIcon />
//                 </IconButton>

//             </div>
//         )

//     }
// }
// export default CustomInput