import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProfEventsStore } from './stores/ProfEventsStore';
import { ClientStore } from './stores/ClientStore';
import { HistoryStore } from './stores/HistoryStore';
import { LogInStore } from './stores/LogInStore';
import { SignUpStore } from './stores/SignUpStore';

const signUpStore = new SignUpStore()
const logInStore = new LogInStore()
const profEventsStore = new ProfEventsStore()
const clientStore = new ClientStore()
const historyStore = new HistoryStore()

const stores = {signUpStore, logInStore, clientStore, profEventsStore, historyStore}

ReactDOM.render(<Provider {... stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
