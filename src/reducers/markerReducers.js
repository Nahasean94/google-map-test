import {ADD_MARKER, CLEAR_MARKERS, DELETE_MARKER} from "../actions/types"

export default (state = [], action = {}) => {
    switch (action.type) {
        case CLEAR_MARKERS:
            return []

        case ADD_MARKER:
            state = [...state, action.payload]
            return state
        case DELETE_MARKER:
            const index = action.payload
            if (index >= 0) {
                return [...state.slice(0, index), ...state.slice(index + 1)]
            }
            return state
        default:
            return state
    }
}