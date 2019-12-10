import * as ActionTypes from './ActionTypes';

export const projects = (state = { projects: [], isNewProjectOpen: false }, action) => {
    switch(action.type) {
        case ActionTypes.SET_PROJECTS:
            return {...state, projects: action.payload}
        case ActionTypes.TOGGLE_NEW_PROJECT:
            return {...state, isNewProjectOpen: !state.isNewProjectOpen}
        default:
            return state
    }
}