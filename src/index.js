import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SignUpStore } from './stores/SignUpStore';
import { ProfEventsStore } from './stores/ProfEventsStore';
import { ClientStore } from './stores/ClientStore';
import { Provider } from 'mobx-react';
import { HistoryStore } from './stores/HistoryStore';
const signUpStore = new SignUpStore()
const profEventsStore = new ProfEventsStore()
const clientStore = new ClientStore()
const historyStore = new HistoryStore()

const stores = {signUpStore, clientStore, profEventsStore, historyStore}

ReactDOM.render(<Provider {... stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
