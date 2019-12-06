import React, { PureComponent } from 'react';
import { Provider } from  'react-redux'
import ConfigureStore, { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Router from './Router'

import './App.css';

// Configures the redux store
const store = ConfigureStore()

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router />
                </ConnectedRouter>
            </Provider>
        )
    }

}