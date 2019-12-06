import * as ActionTypes from './ActionTypes';

export const login = (state = { isLoginOpen: false, token: '' }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_LOGIN:
            return {...state, isLoginOpen: !state.isLoginOpen }
        case ActionTypes.SET_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}