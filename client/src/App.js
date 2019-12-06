import React, { PureComponent } from 'react';
import { Provider } from  'react-redux'
import ConfigureStore, { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Main from './components/MainComponent'
import Projects from './components/Projects/Projects';

// Configures the redux store
const store = ConfigureStore()

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}
