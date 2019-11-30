import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { isProd } from '../config'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { contact } from './contact'
import { console } from './console'
import { projects } from './projects'
import { login } from './login'

export const ConfigureStore = () => {
    let middleware = []

    if (isProd) {
        middleware = [...middleware, thunk]
    } else {
        middleware = [...middleware, thunk, logger]
    }

    const store = createStore(
        combineReducers({
            contact,
            console,
            projects,
            login,
            form: formReducer
        }),
        composeWithDevTools(applyMiddleware(...middleware))
    )

    return store
}