import {ADD_DATA} from "../actions/types"

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_DATA:
            state = [...state, ...action.payload]
            return state
        default:
            return state
    }
}