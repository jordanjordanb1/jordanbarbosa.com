import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { isProd } from '../config'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { connectRouter } from 'connected-react-router' 

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { contact } from './contact'
import { console } from './console'
import { projects } from './projects'
import { login } from './login'
import { user } from './user'


export const history = createBrowserHistory()

export const ConfigureStore = () => {
    let middleware = []

    if (isProd()) {
        middleware = [...middleware, thunk, routerMiddleware(history)]
    } else {
        middleware = [...middleware, thunk, routerMiddleware(history), logger]
    }

    const store = createStore(
        combineReducers({
            contact,
            console,
            projects,
            login,
            form: formReducer,
            user: user,
            router: connectRouter(history)
        }),
        composeWithDevTools(applyMiddleware(...middleware))
    )

    return store
}

export default ConfigureStore