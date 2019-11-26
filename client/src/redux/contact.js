import * as ActionTypes from './ActionTypes';

export const contact = (state = { isContactOpen: false }, action) => {
    switch(action.type) {
        case ActionTypes.SHOW_CONTACT:
            return {...state, isContactOpen: true}

        case ActionTypes.HIDE_CONTACT:
            return {...state, isContactOpen: false}

        default:
            return state
    }
}