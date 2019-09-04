import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ClientHistory from './components/Clients/ClientHistory';
import ClientSettings from './components/Clients/ClientSettings';
import ClientHome from './components/Clients/ClientHome';
import ClientNavBar from './components/Clients/ClientNavBar'
import ProfNavBar from './components/Pros/ProfNavBar'
import Logo from './components/General/Logo';
import ProfSettings from './components/Pros/ProfSettings';
import ProfHome from './components/Pros/ProfHome';
import Login from './components/Login/Login';
import Root from './components/Login/Root';
import Logout from './components/Login/Logout';
import Signup from './components/Login/Signup';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Iframe from 'react-iframe'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0b8e42' },
    secondary: { main: '#c0392b' },
  },
});


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Logo/>

          <Route exact path="/" component={Root} />
          <Route path="/client" component={ClientNavBar} />
          <Route path="/prof" component={ProfNavBar} />
          <Route exact path="/client/home" component={ClientHome} />
          <Route exact path="/client/history" component={ClientHistory} />
          <Route exact path="/client/settings" component={ClientSettings}/>
          <Route exact path="/prof/home" component={ProfHome} />
          <Route exact path="/prof/settings" component={ProfSettings} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;

{/* <Iframe url="https://www.google.com/maps/embed/v1/place?q=ramat%20gan%20shapira%2019&key=AIzaSyDqdsntoF7hsuKcC24uY7RsDGSeALpQnHM"
width="450px"
height="450px"

display="initial"
position="relative"/> */}