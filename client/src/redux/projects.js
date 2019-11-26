import * as ActionTypes from './ActionTypes';

export const projects = (state = { isProjectsOpen: true, projects: [] }, action) => {
    switch(action.type) {
        case ActionTypes.SHOW_PROJECTS:
            return {...state, isProjectsOpen: true}

        case ActionTypes.HIDE_PROJECTS:
            return {...state, isProjectsOpen: false}

        case ActionTypes.SET_PROJECTS:
            return {...state, projects: action.payload}

        default:
            return state
    }
}