import React, { PureComponent } from 'react';
import { Provider } from  'react-redux'
import { ConfigureStore } from './redux/configureStore'
import { ConfigureDevStore } from './redux/configureDevStore'
import { isProd } from './config'

import './App.css';

import Main from './components/MainComponent'

// Configures the redux store
let store;

if (isProd) {
    store = ConfigureStore()
} else {
    store = ConfigureDevStore()
}

export default class App extends PureComponent {
    render() {
        return (
            // <Provider> is for redux
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}
