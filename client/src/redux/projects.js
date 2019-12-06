import * as ActionTypes from './ActionTypes';

export const projects = (state = { projects: [] }, action) => {
    switch(action.type) {
        case ActionTypes.SET_PROJECTS:
            return {...state, projects: action.payload}

        default:
            return state
    }
}