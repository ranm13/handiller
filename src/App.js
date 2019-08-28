import React, { Component } from 'react';
import './styles/App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ClientHistory from './components/Clients/ClientHistory';
import ClientSettings from './components/Clients/ClientSettings';
import ClientHome from './components/Clients/ClientHome';
import Logo from './components/General/Logo';
import ClientHomePage from './components/Clients/ClientHomePage';
import ProfHomePage from './components/Pros/ProfHomePage';
import ProfHome from './components/Pros/ProfHome';
import Button from '@material-ui/core/Button';
import ProfSettings from './components/Pros/ProfSettings';

@inject('logInStore')

@observer
class App extends Component {
  render() {
    const logInStore = this.props.logInStore
    return (
      <Router>
        <div className="App">
          <Logo/>

          {!(logInStore.isClient || logInStore.isProf)?   
          <div>    
            <Button variant="contained" color="primary" onClick={logInStore.enterToClient}>
                Client
            </Button>
            <Button variant="contained" color="secondary"  onClick={logInStore.enterToProf}>
                Professional
            </Button>
          </div>  : null}

          {logInStore.isClient? <ClientHomePage />:
          logInStore.isProf? <ProfHome />
          : null}

          <Route exact path="/client/home" component={ClientHome} />
          <Route exact path="/client/history" component={ClientHistory} />
          <Route exact path="/client/settings" component={ClientSettings} />
          <Route exact path="/prof/home" component={ProfHomePage} />
          <Route exact path="/prof/settings" component={ProfSettings} />
        </div>
      </Router>
    );
  }
}

export default App;

