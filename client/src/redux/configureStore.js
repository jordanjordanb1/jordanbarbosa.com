import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { isProd } from '../config'  

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { contact } from './contact'
import { console } from './console'
import { projects } from './projects'
import { login } from './login'

let middleware = []

if (isProd) {
    middleware = [...middleware, thunk]
} else {
    middleware = [...middleware, thunk, logger]
}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            contact,
            console,
            projects,
            login,
            form: formReducer
        }),
        applyMiddleware(...middleware)
    )

    return store
}