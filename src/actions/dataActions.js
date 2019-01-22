import {ADD_DATA} from "./types"


export function addData(data) {
    return {
        type: ADD_DATA,
        payload:data
    }
}
