import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Date from './components/General/Date';
import ClientHistory from './components/Clients/ClientHistory';
import ClientSettings from './components/Clients/ClientSettings';
import ClientHome from './components/Clients/ClientHome';
import Logo from './components/General/Logo';
import ClientHomePage from './components/Clients/ClientHomePage';
import ProfHomePage from './components/Pros/ProfHomePage';
// import Date from './components/Date';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Logo/>
          {/* <Date /> */}
          <ClientHomePage />
          {/* <ProfHomePage /> */}

          <Route exact path="/home" component={ClientHome} />
          <Route exact path="/history" component={ClientHistory} />
          <Route exact path="/settings" component={ClientSettings} />
        </div>
      </Router>
    );
  }
}

export default App;

