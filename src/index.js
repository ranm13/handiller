import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { SignUpStore } from './stores/SignUpStore';
import { ProfEventsStore } from './stores/ProfEventsStore';
import { ListOfProfessionsStore } from './stores/ListOfProfessionsStore';
import { ClientStore } from './stores/ClientStore';
import { HistoryStore } from './stores/HistoryStore';




const profEventsStore = new ProfEventsStore()
const signUpStore = new SignUpStore()
const listOfProfessionsStore = new ListOfProfessionsStore()
const clientStore = new ClientStore()
const historyStore = new HistoryStore()

const stores = {signUpStore, listOfProfessionsStore, clientStore, profEventsStore, historyStore}


ReactDOM.render(<Provider {... stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
