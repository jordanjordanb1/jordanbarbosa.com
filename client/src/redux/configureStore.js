import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { contact } from './contact'
import { console } from './console'
import { projects } from './projects'

export const ConfigureStore = () => {
    // This is for the redux Devtools to work correctly. Remove before building
    const compose = enhancer => {return enhancer},
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combineReducers({
            contact,
            console,
            projects,
            form: formReducer
        }),
        composeEnhancers(applyMiddleware(thunk, logger)) // Remove composeEnhancer before building, as well as redux thunk middleware
    )

    return store
}