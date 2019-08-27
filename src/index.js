import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SignUpStore } from './stores/SignUpStore';
import { ListOfProfessionsStore } from './stores/ListOfProfessionsStore';
import { ClientStore } from './stores/ClientStore';
import { Provider } from 'mobx-react';

const signUpStore = new SignUpStore()
const listOfProfessionsStore = new ListOfProfessionsStore()
const clientStore = new ClientStore()

const stores = {signUpStore, listOfProfessionsStore, clientStore}

ReactDOM.render(<Provider {... stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
