import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { SignUpStore } from './stores/SignUpStore';
import { ProfEventsStore } from './stores/ProfEventsStore';
const signUpStore = new SignUpStore()
const profEventsStore = new ProfEventsStore()
const stores = {signUpStore, profEventsStore}

ReactDOM.render(<Provider {...stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
