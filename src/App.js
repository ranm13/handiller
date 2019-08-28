import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Date from './components/General/Date';
import History from './components/Clients/History';
import Settings from './components/Clients/Settings';
import Home from './components/Clients/Home';
import ClientHomePage from './components/Clients/ClientHomePage';
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
          {/* <ClientHomePage /> */}
          <ProfHomePage />

          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/settings" component={Settings} /> */}
        </div>
      </Router>
    );
  }
}

export default App;

