import * as ActionTypes from './ActionTypes'

export const console = (
    state = {
        activeList: [],
        history: [],
        historyIndex: 0,
        inputValue: '',
        inputRef: null
    }, action) => {
        switch (action.type) {
            case ActionTypes.EMPTY_CONSOLE:
                return {...state, activeList: [], history: [], historyIndex: 0}

            case ActionTypes.EXECUTE_COMMAND:
                return {...state, history: [action.payload, ...state.history], historyIndex: 0}

            case ActionTypes.INSERT_ITEM:
                return {...state, activeList: [...state.activeList, action.payload]}

            case ActionTypes.INSERT_MESSAGE:
                return {...state, activeList: [...state.activeList, action.payload]}

            case ActionTypes.INSERT_INPUT:
                return {...state, activeList: [...state.activeList, action.payload]}

            case ActionTypes.SET_INPUT_VALUE:
                return {...state, inputValue: action.payload}

            case ActionTypes.SET_REF:
                return {...state, inputRef: action.payload}

            case ActionTypes.TICK_HISTORY_INDEX_UP:
                return {...state, historyIndex: state.historyIndex + 1}

            case ActionTypes.TICK_HISTORY_INDEX_DOWN:
                return {...state, historyIndex: state.historyIndex - 1}

            default:
                return state
        }
    }