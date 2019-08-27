import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react'
import ClientHomePage from './components/Clients/ClientHomePage';
import ProfHomePage from './components/Pros/ProfHomePage';


@observer
class App extends Component{
  render(){
      return (
    <div className="App">
      <ClientHomePage />
      <ProfHomePage />
    </div>
  );
  }

}

export default App;
