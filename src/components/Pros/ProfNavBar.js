import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

function NavBar() {
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    
    <Paper className="nav-bar" style={{backgroundColor: '#efebe9'}}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Home" to='/prof/home' component={Link} />
        <Tab label="Settings" to='/prof/settings' component={Link} />
        <Tab label="Logout" to='/logout' component={Link}/>
      </Tabs>
      
    </Paper>
    
  )
}

export default NavBar
