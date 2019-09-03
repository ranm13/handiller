import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import ClientHistory from './components/Clients/ClientHistory';
import ClientSettings from './components/Clients/ClientSettings';
import ClientHome from './components/Clients/ClientHome';
import ClientNavBar from './components/Clients/ClientNavBar'
import ProfNavBar from './components/Pros/ProfNavBar'
import Logo from './components/General/Logo';
import ClientSignUp from './components/Login/ClientSignUp';
import ProfSettings from './components/Pros/ProfSettings';
import ProfHome from './components/Pros/ProfHome';
import Login from './components/Login/Login';
import Root from './components/Login/Root';

class App extends Component {
  render() {
    return (
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
          <Route exact path="/signup" component={ClientSignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

