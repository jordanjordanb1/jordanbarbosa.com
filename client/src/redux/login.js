import * as ActionTypes from './ActionTypes';

export const login = (state = { isLoginOpen: false, success: null, errMsg: '' }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_LOGIN:
            return {...state, isLoginOpen: !state.isLoginOpen, success: true, errMsg: '' }
        case ActionTypes.SET_LOGIN_ERROR:
            return {...state, success: action.payload.success, errMsg: action.payload.message}
        default:
            return state
    }
}