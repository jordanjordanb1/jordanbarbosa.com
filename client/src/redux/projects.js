import * as ActionTypes from './ActionTypes';

export const projects = (state = { projects: [], isNewProjectOpen: false, storedImage: null }, action) => {
    switch(action.type) {
        case ActionTypes.SET_PROJECTS:
            return {...state, projects: action.payload}
        case ActionTypes.TOGGLE_NEW_PROJECT:
            return {...state, isNewProjectOpen: !state.isNewProjectOpen}
        case ActionTypes.STORE_IMAGE:
            return {...state, storedImage: action.payload}
        default:
            return state
    }
}