import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react'
import ClientHomePage from './components/Clients/ClientHomePage';
import ProfHomePage from './components/Pros/ProfHomePage';
import Date from './components/Date';
// import Calendar from 'react-calendar';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Date />
        <ClientHomePage />
        <ProfHomePage />
      </div>
    );
  }

}

export default App;
