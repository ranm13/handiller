import React, { Component } from 'react';
import './styles/App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ClientHistory from './components/Clients/ClientHistory';
import ClientSettings from './components/Clients/ClientSettings';
import ClientHome from './components/Clients/ClientHome';
import Logo from './components/General/Logo';
import ClientHomePage from './components/Clients/ClientHomePage';
import ClientSignUp from './components/Signup/ClientSignUp';
import ProfHomePage from './components/Pros/ProfHomePage';
import Button from '@material-ui/core/Button';
import ProfSettings from './components/Pros/ProfSettings';
import { Grid } from '@material-ui/core';

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
          <Grid container justify="center" alignItems="center" style={{height:"90vh"}} spacing={6}> 
            <Grid item>
              <Button variant="contained" color="primary" onClick={logInStore.enterToClient}>
                  Client
              </Button>
            </Grid>   
            <Grid item>
              <Button variant="contained" color="secondary"  onClick={logInStore.enterToProf}>
                  Professional
              </Button>
            </Grid>  
          </Grid>  : null}

          {logInStore.isClient? <ClientHomePage />:
          logInStore.isProf? <ProfHomePage />
          : null}

          {logInStore.isClient? <Route exact path="/client/home" component={ClientHome} /> : <Redirect to="/"/>}
          {logInStore.isClient? <Route exact path="/client/history" component={ClientHistory} /> : <Redirect to="/"/>}
          {logInStore.isClient? <Route exact path="/client/settings" component={ClientSettings} /> : <Redirect to="/"/>}
          {logInStore.isProf? <Route exact path="/prof/home" component={ProfHomePage} /> : <Redirect to="/"/>}
          {logInStore.isProf? <Route exact path="/prof/settings" component={ProfSettings} /> : <Redirect to="/"/>}
        </div>
      </Router>
    );
  }
}

export default App;

