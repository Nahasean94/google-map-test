import {ADD_MARKER, DELETE_MARKER} from "./types"

export function addMarker(marker) {
    return {
        type: ADD_MARKER,
        payload:marker
    }
}
export function deleteMarker(index) {
    return {
        type:DELETE_MARKER,
        payload:index
    }
}
