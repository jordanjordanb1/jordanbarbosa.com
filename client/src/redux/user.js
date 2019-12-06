import * as ActionTypes from './ActionTypes';

export const user = (state = { isAuthenticated: false, token: '' }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_AUTH:
            return {...state, isAuthenticated: !state.isAuthenticated }
        case ActionTypes.SET_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}