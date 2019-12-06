import * as ActionTypes from './ActionTypes';

export const login = (state = { isLoginOpen: true }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_LOGIN:
            return {...state, isLoginOpen: !state.isLoginOpen }
        default:
            return state
    }
}