import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react'
import ProfHomePage from './components/Pros/ProfHomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Date from './components/Date';
import History from './components/Clients/History';
import Settings from './components/Clients/Settings';
import Home from './components/Clients/Home';
import ClientHomePage from './components/Clients/ClientHomePage';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ClientHomePage />
          <ProfHomePage />

          <Date />

          <Route exact path="/home" component={ClientHomePage} />
          <Route exact path="/history" component={History} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </Router>
    );


  }

}

export default App;
